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

import { blogDetailsHelpers } from './helpers/BlogDetails';

 import { API_URL } from 'react-native-dotenv';
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: {},
        }
    }

    static navigationOptions = ({ navigation }) => ({
    title: ` ${navigation.state.params.name}`,
    });


    componentWillMount() {
        const { categoryId } = this.props.navigation.state.params;
        const blog = new blogDetailsHelpers();
        blog.getBlogs(API_URL, categoryId).then(blogs => this.setState({ blogs }));

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
            <FlatList
                data={this.state.blogs}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}

