/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
'use client';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';
import {sleep} from 'utils';

function App(): JSX.Element {
  useEffect(() => {
    const init = async () => {
      await sleep(3000);
      SplashScreen.hide(); //hides the splash screen on app load.
    };
    init();
  }, []);

  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://maheshmuttintidev.in'}}
        style={{flex: 1}}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

export default App;
