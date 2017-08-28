import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button, Divider, Avatar } from 'react-native-material-design';

import BlogItem from '../Components/BlogItem';
import {CommentList} from '../Containers/CommentList';

import { style } from '../Components/Styles/BlogItemStyle';


import { blogDetailsHelpers } from './helpers/BlogDetails';
import { getAuthorByBlogId, getCommentsByBlogId } from '../utils/Api'

export default class BlogDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auth_name: "",
            auth_image: "",
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5G-D-qhtvJp1VbU-fejA9nZ2NT93TOGJiDqOIT_yJbb2c6wLgDQ",
            comments:[]
                }
    }
    static navigationOptions = ({ navigation }) => ({
        title: ` ${navigation.state.params.blog.title}`,
    });

    componentWillMount() {
        getAuthorByBlogId(this.props.navigation.state.params.blog.userId).then(author => this.setState({ auth_name: author[0].username, auth_image: author[0].image }));
        getCommentsByBlogId(this.props.navigation.state.params.blog.id).then(comments => this.setState({ comments }));
    }

    navigateToAuthorPage = (id = 1) => {
        const { navigate } = this.props.navigation;
        navigate('Author', {});
    }


    render() {
        const { blog } = this.props.navigation.state.params;
        return (
            <ScrollView>
                 <Card style={style.card}>
                    <TouchableOpacity onPress={this.navigateToAuthorPage} style={{ alignItems: 'center', padding: 5 }}>
                        <Image style={{ height: 80, width: 80, borderRadius: 40 }} source={{ uri: this.state.auth_image ? this.state.auth_image : this.state.default }} />
                        <Text> {this.state.auth_name} </Text>
                    </TouchableOpacity>
                    <Card.Body>
                        <Text style={style.content}>{blog.content}</Text>
                    </Card.Body>

                </Card>
                <CommentList comments={this.state.comments} />
            </ScrollView>
        );
    }

}