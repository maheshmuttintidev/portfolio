import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function BasicWrapper({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={0}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={styles.touchableWithoutFeedback}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={styles.scrollView}>
            {children}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 24,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  touchableWithoutFeedback: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
