import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import EmailSignIn from './src/components/EmailSignIn';
import GoogleSignIn from './src/components/GoogleSignIn';
import PhoneSignIn from './src/components/PhoneSignIn';

GoogleSignin.configure({
  webClientId:
    '379133009373-a5val6ce0gniso477574co6077n9b0ig.apps.googleusercontent.com',
});

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 40}}
      style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Text style={styles.text}> Firebase Authentications </Text>
      <GoogleSignIn />
      <EmailSignIn />
      <PhoneSignIn />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
