import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class BlogDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Blog DetailScreens Screen',
  }
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

