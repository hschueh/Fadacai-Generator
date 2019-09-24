import 'dart:ui';
import 'package:flutter/gestures.dart';
import 'package:djky/mixer-game.dart';

abstract class BaseGameObject {
  final MixerGame game;
  BaseGameObject(this.game);
  void update(double t);
  void render(Canvas c);
  // Return false to continue the event passing.
  bool onTapDown(TapDownDetails details){
    return false;
  }
}