/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
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
