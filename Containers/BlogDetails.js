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
import { getAuthorByBlogId, getCommentsByBlogId } from '../utils/Api'

export default class BlogDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auth_name: "",
            auth_image: "",
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5G-D-qhtvJp1VbU-fejA9nZ2NT93TOGJiDqOIT_yJbb2c6wLgDQ",
            comments: [],
            modalVisible: false,
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

    setModalVisible =(visible) =>{
        this.setState({ modalVisible: visible });
    }

    setComment = (comment) =>{
        console.log(comment);
    }
    setName = (name) =>{
        console.log(name);
    }
    renderModal() {
        return (
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                    style={{height:100}}
                >
                    <View style={{ marginTop: 22, backgroundColor:'green' }}>
                        <View>
                            <TextInput
                             borderBottomColor="transparent"
                              onChangeText={this.setName}
                              placeholder="your name"/>
                             <TextInput
                             borderBottomColor="transparent"
                              onChangeText={this.setComment}
                             placeholder="write something ..."/>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Icon name="close" style={{fontSize:20,position:'absolute'
                                ,top:10}} />
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
          
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
                <TouchableOpacity style={{
                    padding: 10, alignSelf: 'stretch', margin: 10, alignItems: 'center',
                    justifyContent: 'center', backgroundColor: '#81C341'
                }} onPress={() => {
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