import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Avatar } from 'react-native-material-design';

export default class AuthorDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Author',
  }
  render() {
    return (
      <ScrollView>
        <Card style={{}}>
          <View>
            <View>
              <Image style={styles.img} source={{ uri: 'https://image.freepik.com/free-icon/user-male-shape-in-a-circle-ios-7-interface-symbol_318-39025.jpg' }} />
            </View>
            <View>
              <Text style={styles.title}>Jon Don</Text>
              <Text style={styles.info}>Front-End Developer</Text>
            </View>

          </View>
        </Card>

      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00'
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  info: {
    fontSize: 20,
    color: '#ddd'
  }
});