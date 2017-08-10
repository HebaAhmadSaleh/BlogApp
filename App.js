import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import HomeScreen from './Containers/HomeScreen';
import { StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import blogIcon from './Images/blogger-logo-icon-png-10.png';

class SplashScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    }

    componentWillMount = () => {
        const { navigate } = this.props.navigation;
        setTimeout(() => {
            navigate('Home');
        }, 2000)
    }
    render() {
        return (<View style={styles.container}>
            <Icon name="note" size={120} color="white" />
            {/* <Image source={blogIcon} style={styles.logo} /> */}
        </View>);
    }
}

export const SimpleApp = StackNavigator({
    SplashScreen: { screen: SplashScreen },
    Home: { screen: HomeScreen },

});

//AppRegistry.registerComponent('BlogApp', () => SimpleApp);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF7D00',
        //opacity:0.2
    },
    logo: {
        height: 200,
        width: 200,

    }
})