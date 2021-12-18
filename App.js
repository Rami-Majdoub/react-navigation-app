import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './screens/auth'
import MyStack from './views/MyStack'

export default function App() {

  return (
      <MyStack />
    // <NavigationContainer>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 26,
  },

});
