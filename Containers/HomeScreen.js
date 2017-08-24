import React from 'react';
import {
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView,
    FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button, Divider } from 'react-native-material-design';
import BlogItem from '../Components/BlogItem';

import { SideMenu, List, ListItem } from 'react-native-elements';
import HeaderMenu from '../Components/HeaderMenu';
import { API_URL } from 'react-native-dotenv';
import { getAuthorByBlogId, getBlogs } from '../utils/Api'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: {},
            isOpen: false,
        }
    }

    static navigationOptions = ({ navigation }) => ({
        header:   null ,
        tabBarLabel: 'Home',
        //title:   this.props.navigation.state.params ?` ${navigation.state.params.name}` : ''
    });


    componentWillMount() {
       // const { categoryId } = this.props.navigation.state.params ? this.props.navigation.state.params : 0 ;
        getBlogs().then((blogs) => {
            this.setState({ blogs })});
    }


    _keyExtractor = blog => blog.id;

    _renderItem = (blog) => {
        return (
            <BlogItem blog={blog} _onPress={this._onPress} />
        )
    }

    _onPress = (item) => {
        const { navigate } = this.props.navigation;
        navigate('Blog', { blog: item});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <HeaderMenu/>
                <FlatList
                    data={this.state.blogs}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

