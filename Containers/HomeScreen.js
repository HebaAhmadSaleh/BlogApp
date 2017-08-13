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
import  BlogItem from '../Components/BlogItem';

import { blogDetailsHelpers } from './helpers.js/BlogDetails';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: {},
        }
    }

    static navigationOptions = {
        title: 'Home Screen',
        header: null,
    }

    componentWillMount() {
        const blog = new blogDetailsHelpers();
        blog.getBlogs("http://192.168.56.1:3000/data").then(blogs => this.setState({ blogs }));

    }

    _keyExtractor = blog => blog.id;

    _renderItem = (blog) => {
        return(
            <BlogItem blog={blog} />
        )
    }
    render() {
        console.log(this.state.blogs)
        return (
            <FlatList
                data={this.state.blogs}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

