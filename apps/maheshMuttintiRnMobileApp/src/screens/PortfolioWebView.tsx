import {View, StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function PortfolioWebView() {
  return (
    <View style={styles.flex}>
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://maheshmuttintidev.in'}}
        style={styles.flex}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});
