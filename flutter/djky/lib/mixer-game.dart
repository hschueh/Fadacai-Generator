import 'dart:ui';
import 'package:flame/game.dart';
import 'package:flame/flame.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter/gestures.dart';
import 'package:djky/components/base-game-object.dart';
import 'package:djky/components/mayor.dart';
import 'components/text-button.dart';

class MixerGame extends Game {
  Size screenSize;
  double tileSize;
  List<BaseGameObject> bgos = [];
  List<String> audioList;// = ["Security.mp3"];

  MixerGame() {
    initialize();
  }

  void initialize() async {
    resize(await Flame.util.initialDimensions());
    String data = await getFileData("assets/asset_list.txt");
    List<String> splits = data.split("\n");
    audioList = splits.where((i) => i.contains(".mp3")).toList();
    audioList = audioList.map((name) => name.split("/").removeLast()).toList();
    audioList.removeRange(40, audioList.length);
    await Flame.audio.loadAll(audioList);
    Mayor m = Mayor(this, screenSize.width/2, 2*tileSize);
    bgos.add(m);
    for(num i = 0; i < 5; ++i) {
      for(num j = 0; j < 8; ++j) {
        bgos.add(TextButton(this, Rect.fromLTWH(j*screenSize.width/8, i*(tileSize+20)+3*tileSize, tileSize, tileSize), (i*8+j).toString(), i*8+j));
      }
    }
  }

  void render(Canvas canvas) {
    bgos.forEach(
      (object) => object.render(canvas)
    );
  }

  void update(double t) {
    for(int i = 0; i < bgos.length; ++i) {
      bgos[i].update(t);
    }
  }

  void resize(Size size) {
    screenSize = size;
    tileSize = size.width / 9;
  }

  void onTapDown(TapDownDetails details) {
    bool handled = false;
    for(int i = 0; i < bgos.length && !handled; ++i) {
      handled = bgos[i].onTapDown(details);
    }
  }

  void playClip(int id) {
    Flame.audio.play(audioList[id]);
  }
  // Assumes the given path is a text-file-asset.
  Future<String> getFileData(String path) async {
    return await rootBundle.loadString(path);
  }
}