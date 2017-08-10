import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  }
  render() {
    return <Text>Hello, Home!</Text>;
  }
}

