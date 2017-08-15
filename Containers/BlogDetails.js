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




import { blogDetailsHelpers } from './helpers/BlogDetails';

export default class BlogDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: {},
        }
    }
    static navigationOptions = {
        title:  'the blog title from props',
    }

       componentWillMount() {
        const blog = new blogDetailsHelpers();
        blog.getBlogDetails("http://192.168.56.1:3000/data").then(blog=>this.setState({blog}));

    }



    render() {
        console.log(this.state.blog);
        return (
            <View>
                <Card>
                    <Card.Body>
                        <Text>Some text to go in the body.</Text>
                        <Text>Some text to go in the body.</Text>
                        <Text>Some text to go in the body.</Text>
                        <Text>Some text to go in the body.</Text>

                    </Card.Body>

                </Card>
            </View>
        );
    }

}