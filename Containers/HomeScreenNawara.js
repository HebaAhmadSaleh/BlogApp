import React from 'react';
import {
  View,
  Image,
  AppRegistry,
  Text,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button, Divider } from 'react-native-material-design';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  }
  render() {
    let cardsList = [2, 3, 4, 5, 6];
    return (
        <ScrollView>
            <Card>
                <Card.Media
                    image={<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />}
                    overlay
                />
                <Card.Body>
                    <Text>Some text to go in the body.</Text>
                </Card.Body>
                <Card.Actions position="right">
                    <Button value="ACTION" />
                </Card.Actions>
            </Card>
            <Divider />
            <Card>
                <Card.Media
                    image={<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />}
                    overlay
                />
                <Card.Body>
                    <Text>Some text to go in the body.</Text>
                </Card.Body>
                <Card.Actions position="right">
                    <Button value="ACTION" />
                </Card.Actions>
            </Card>
            <Divider />
            <Card>
                <Card.Media
                    image={<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />}
                    overlay
                />
                <Card.Body>
                    <Text>Some text to go in the body.</Text>
                </Card.Body>
                <Card.Actions position="right">
                    <Button value="ACTION" />
                </Card.Actions>
            </Card>
            <Divider />
        </ScrollView>
    );
  }
}

