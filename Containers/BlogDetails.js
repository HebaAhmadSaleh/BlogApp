import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    AppRegistry,
    Text,
    Modal,
    ScrollView,
    TouchableHighlight,
    TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button, Divider, Avatar } from 'react-native-material-design';

import BlogItem from '../Components/BlogItem';
import { CommentList } from '../Containers/CommentList';

import { style } from '../Components/Styles/BlogDetailsStyle';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


import { blogDetailsHelpers } from './helpers/BlogDetails';
import { getAuthorByBlogId, getCommentsByBlogId, addComment } from '../utils/Api'

export default class BlogDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auth_name: "",
            auth_id: "",
            auth_image: "",
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5G-D-qhtvJp1VbU-fejA9nZ2NT93TOGJiDqOIT_yJbb2c6wLgDQ",
            comments: [],
            modalVisible: false,
            name: "",
            comment: ""
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: ` ${navigation.state.params.blog.title}`,
    });

    componentWillMount() {
        getAuthorByBlogId(this.props.navigation.state.params.blog.userId).then(author => this.setState({auth_id: author[0].id, auth_name: author[0].username, auth_image: author[0].image }));
        getCommentsByBlogId(this.props.navigation.state.params.blog.id).then(comments => this.setState({ comments }));
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    navigateToAuthorPage = (id = 1) => {
        const { navigate } = this.props.navigation;
        navigate('Author', {
            auth_id: this.state.auth_id,
            auth_name: this.state.auth_name,
            auth_image: this.state.auth_image
        });
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setName = (name) => {
        this.setState({ name })
    }

    setComment = (comment) => {
        this.setState({ comment })
    }
    _addComment = () => {
        let postId = this.props.navigation.state.params.blog.id;
        if (this.state.name && this.state.comment) {
            addComment(postId, this.state.name, this.state.comment).then(() => {
                this.setState({ name: "" });
                this.setState({ comment: "" });
                this.setState({ modalVisible: false });
                getCommentsByBlogId(this.props.navigation.state.params.blog.id).then(comments => this.setState({ comments }));

            });
        }
        else{
        alert("PLease fill the data.");
        }
    }
    renderModal() {
        return (
            <View style={{ marginTop: 22, backgroundColor: 'green' }}>
                <Modal
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                    style={{ height: 100 }}
                >
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1 }} />
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Icon name="close" style={{
                                    fontSize: 30,
                                    margin: 10,
                                    color: '#81C341'
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center' }} >
                            <TextInput
                                borderBottomColor="transparent"
                                onChangeText={this.setName}
                                placeholder="your name"
                                style={style.textInput} />
                            <TextInput
                                borderBottomColor="transparent"
                                onChangeText={this.setComment}
                                placeholder="write something ..."
                                style={style.textInput} />
                            <TouchableOpacity style={style.buttonStyle} onPress={this._addComment}>
                                <Text style={{ color: "white", fontSize: 20 }}>
                                    Add Comment
                    </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
            </View>

        )
    }

    render() {
        const { blog } = this.props.navigation.state.params;
        return (
            <ScrollView style={style.container}>
                <View style={style.card}>
                    <TouchableOpacity onPress={this.navigateToAuthorPage} style={{ alignItems: 'center', padding: 5 }}>
                        <Image style={{ height: 80, width: 80, borderRadius: 40 }} source={{ uri: this.state.auth_image ? this.state.auth_image : this.state.default }} />
                        <Text> {this.state.auth_name} </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={style.content}>{blog.content}</Text>
                    </View>

                </View>
                <CommentList comments={this.state.comments} />
                <TouchableOpacity style={style.buttonStyle}
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Add Comment
                    </Text>
                </TouchableOpacity>
                {this.renderModal()}
            </ScrollView>
        );
    }

}

