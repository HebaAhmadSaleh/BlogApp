import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import HomeScreen from './Containers/HomeScreen';
import BlogDetails from './Containers/BlogDetails';
import Categories from './Containers/Categories';
import AboutUs from './Containers/AboutUs';
import Author from './Containers/Author';
import Bloglist from './Containers/BlogList';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import blogIcon from './Images/blogger-5-512.png';
class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentWillMount = () => {
        const { navigate } = this.props.navigation;
        setTimeout(() => {
            navigate('App');
        }, 2000)
    }
    render() {
        return (<View style={styles.container}>
            {/* <Icon name="note" size={120} color="white" /> */}
            <Image source={blogIcon} style={styles.logo} />
        </View>);
    }
}


const MyApp = DrawerNavigator({
    Home: { screen: HomeScreen },
    Categories: { screen: Categories },
});
export const SimpleApp = StackNavigator({
    SplashScreen: { screen: SplashScreen },
    myBloglist: { screen: Bloglist },
    App: { screen: MyApp },
    Blog: { screen: BlogDetails },
    //Categories: { screen: Categories },
    AboutUs: { screen: AboutUs },
    Author: { screen: Author },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#81C341',
        // backgroundColor: '#FF7D00',
        // backgroundColor: '#00aaaa',
        //opacity:0.2
    },
    logo: {
        height: 200,
        width: 200,
    }
})