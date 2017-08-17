import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AboutUs extends React.Component {
  static navigationOptions = {
    title: 'AboutUs ',
  }
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

