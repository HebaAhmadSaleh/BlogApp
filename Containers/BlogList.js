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
import { getAuthorByBlogId, getBlogsbyId } from '../utils/Api'

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: {},
            isOpen: false,
            loading: true,
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.name
    });


    componentWillMount() {
        const { categoryId } = this.props.navigation.state.params ? this.props.navigation.state.params : 0;
        getBlogsbyId(categoryId).then((blogs) => {
            this.setState({ blogs });
            this.setState({ loading: false })
        })
    }

    getALlBlogs(id) {
        getBlogsbyId(id).then((blogs) => {
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
            return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='#81C341' /></View>)
    }

    renderList = () => {
        if (this.state.loading) {
            return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='#81C341' /></View>)
        }
        else {
            if (this.state.blogs.length > 0) {
                return (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.blogs}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    </View>
                )
            } else {
                return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{color:'#81C341',fontSize:20}}> There are No Blogs in this Category.</Text>
                    </View>
                )
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
            {this.renderList()}
            </View>
        );
    }
}

