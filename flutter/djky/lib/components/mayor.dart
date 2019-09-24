import 'dart:ui';
import 'dart:math';
import 'package:flame/flame.dart';
import 'package:flame/components/component.dart';
import 'package:flutter/gestures.dart';
import 'package:djky/components/base-game-object.dart';
import 'package:djky/mixer-game.dart';

class Mayor extends BaseGameObject {
  List sprites;
  List spriteComponent;
  Image image;
  double x, y = 0;
  num theta = 0;

  Mayor(MixerGame game, this.x, this.y) : super(game) {
    // sprites = [Sprite('han_thinking.png')];
    // spriteComponent = sprites.map((sprite)=>
      // SpriteComponent.fromSprite(game.tileSize, game.tileSize, sprite)
    // ).toList(); // width, height, sprite
    initialize();
  }
  
  void initialize() async {
    image = await Flame.images.load('han_thinking.png');
  }

  @override
  bool onTapDown(TapDownDetails details) {
    return false;
  }

  @override
  void render(Canvas c) {
    // spriteComponent[0].x = x-game.tileSize/4*sin(theta)-game.tileSize/2;
    // spriteComponent[0].y = y-game.tileSize/4*cos(theta);
    // spriteComponent[0].render(c);
    if(image == null)
      return;

    var paint = Paint()..color = Color(0xffffffff);
    var rect = Rect.fromLTWH(0.0, 0.0, image.width.toDouble(), image.height.toDouble());
    var rectDst = Rect.fromLTWH(x-game.tileSize/4*sin(theta)-game.tileSize/2, y-game.tileSize/4*cos(theta), game.tileSize, game.tileSize);

    c.drawImageRect(image, rect, rectDst, paint);
  }

  @override
  void update(double t) {
    theta += t*6*pi;
    theta = theta%(2*pi);
  }
}