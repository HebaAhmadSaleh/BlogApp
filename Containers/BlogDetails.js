import React from 'react';
import {
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button, Divider } from 'react-native-material-design';
import BlogItem from '../Components/BlogItem';

import { style } from '../Components/Styles/BlogItemStyle';


import { blogDetailsHelpers } from './helpers/BlogDetails';

export default class BlogDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {},
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: ` ${navigation.state.params.blog.title}`,
    });

    componentWillMount() {
        // const blog = new blogDetailsHelpers();
        // blog.getBlogDetails("http://192.168.56.1:3000/data").then(blog => this.setState({ blog }));

    }


    render() {
         const { blog } = this.props.navigation.state.params;
        console.log(blog);
        return (
            <View>
                  <Card style={style.card}>
                    <Card.Media
                        image={<Image source={{ uri: blog.image }} />}
                        overlay
                    />

                    <Card.Body>
                        <Text style={style.content}>{blog.content}</Text>
                    </Card.Body>

                </Card>
            </View>
        );
    }

}