import 'dart:ui';
import 'package:flame/sprite.dart';
import 'package:flame/components/component.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:djky/components/base-game-object.dart';
import 'package:djky/mixer-game.dart';

class TextButton extends BaseGameObject {
  Rect rect;
  bool pressed = false;
  List<Paint> paint;
  TextPainter tp;
  num index;
  TextButton(MixerGame game, this.rect, String data, this.index) : super(game) {
    TextSpan text = TextSpan(text: data, style: new TextStyle(color: Colors.red));
    this.tp = new TextPainter(text: text, textAlign: TextAlign.center, textDirection: TextDirection.ltr);
    paint = [Paint(), Paint()];
    paint[0].color = Color(0xFFAAAAAA);
    paint[1].color = Color(0xFF888888);
  }

  @override
  bool onTapDown(TapDownDetails details) {
    if(!rect.contains(details.globalPosition))
      return false;

    pressed = true;
    Future.delayed(const Duration(milliseconds: 500), () {
      pressed = false;
    });
    
    game.playClip(index);
    return true;
  }

  @override
  void render(Canvas c) {
    c.drawRect(pressed?this.rect:this.rect.inflate(1.01), this.paint[pressed?1:0]);
    tp.layout(maxWidth: rect.width, minWidth: rect.width);
    tp.paint(c, Offset(rect.left, rect.top+(rect.height-tp.height)/2));
  }

  @override
  void update(double t) {}
}