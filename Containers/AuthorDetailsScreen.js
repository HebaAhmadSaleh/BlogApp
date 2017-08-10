import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AuthorDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Author Details Screen',
  }
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

