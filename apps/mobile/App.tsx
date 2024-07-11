import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Home} from './src/screens/Home';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'lightgrey',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
