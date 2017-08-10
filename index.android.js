import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import HomeScreen from './Containers/HomeScreen';
import { StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';


class SplashScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  }

  componentWillMount = () => {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Home');
    }, 1000)
  }
  render() {
    return (<View>

      <Text>Hello, Navigation!</Text>
    </View>);
  }
}

const SimpleApp = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Home: { screen: HomeScreen },

});

AppRegistry.registerComponent('BlogApp', () => SimpleApp);
