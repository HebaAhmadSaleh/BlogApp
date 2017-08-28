import React from 'react';
import {
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView,
    FlatList,
    ActivityIndicator
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
            loading: true,
        }
    }

    static navigationOptions = ({ navigation }) => ({
        header: null,
    });


    componentWillMount() {
        this.getALlBlogs();
    }

    getALlBlogs(){
        getBlogs().then((blogs) => {
            this.setState({ blogs });
            this.setState({ loading: false })
        })
    }
    _keyExtractor = blog => blog.id;

    _renderItem = (blog) => {
        return (
            <BlogItem blog={blog} _onPress={this._onPress} />
        )
    }

    _onPress = (item) => {
        const { navigate } = this.props.navigation;
        navigate('Blog', { blog: item });
    }

    checkLoading = () => {
        if (this.state.loading)
            return (<ActivityIndicator size='large' color='#81C341' />)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                {this.checkLoading()}
                </View>
                <FlatList
                    data={this.state.blogs}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

