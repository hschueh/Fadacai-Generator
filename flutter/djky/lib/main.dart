import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/gestures.dart';
import 'package:flame/util.dart';
import 'package:djky/mixer-game.dart';
import 'package:firebase_admob/firebase_admob.dart';

void main() async {
  FirebaseAdMob.instance.initialize(appId: "ca-app-pub-3940256099942544~3347511713");
  MobileAdTargetingInfo targetingInfo = MobileAdTargetingInfo(
    keywords: <String>['flutterio', 'beautiful apps'],
    contentUrl: 'https://flutter.io',
    // birthday: DateTime.now(),
    childDirected: false,
    // designedForFamilies: false,
    // gender: MobileAdGender.male, // or MobileAdGender.female, MobileAdGender.unknown
    testDevices: <String>[], // Android emulators are considered test devices
  );
  BannerAd myBanner = BannerAd(
    // Replace the testAdUnitId with an ad unit id from the AdMob dash.
    // https://developers.google.com/admob/android/test-ads
    // https://developers.google.com/admob/ios/test-ads
    adUnitId: BannerAd.testAdUnitId,
    size: AdSize.smartBanner,
    targetingInfo: targetingInfo,
    listener: (MobileAdEvent event) {
      print("BannerAd event is $event");
    },
  );
  myBanner
  // typically this happens well before the ad is shown
  ..load()
  ..show(
    anchorOffset: 0.0,
    anchorType: AnchorType.top,
  );

  Util flameUtil = Util();
  await flameUtil.fullScreen();
  await flameUtil.setOrientation(DeviceOrientation.portraitUp);

  MixerGame game = MixerGame();
  runApp(GameApp(game));
  TapGestureRecognizer tapper = TapGestureRecognizer();
  tapper.onTapDown = game.onTapDown;
  flameUtil.addGestureRecognizer(tapper);

}

class GameApp extends StatelessWidget {
  MixerGame game;
  GameApp(this.game);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Stack(
        children: [
          Center(
            child: game.widget,
          ),
          Container(
            alignment: Alignment.center,
            margin: EdgeInsets.all(16),
            child: Stack(
              children: [
                Align(
                  alignment: Alignment.bottomRight,
                  child: FloatingActionButton.extended(
                    onPressed: () {
                      // Add your onPressed code here!
                    },
                    label: Text('設定'),
                    icon: Icon(Icons.work)
                  )
                ),
              ]
            ),
          ),
        ],
      ),
    );
  }
}