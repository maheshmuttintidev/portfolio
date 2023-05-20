/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
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
