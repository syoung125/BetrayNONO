import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,HashRouter,Route } from 'react-native';
import GameStart from './screens/GameStart';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default class App extends React.Component{
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <GameStart />
    );
  }

}