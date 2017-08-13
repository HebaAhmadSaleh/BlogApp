
import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    FlatList
} from 'react-native';

import { Card, Button, Divider } from 'react-native-material-design';

import { style } from './Styles/BlogItemStyle';

export default class BlogItem extends Component {
    render() {
        const { item } = this.props.blog;
        return (
            <TouchableOpacity>
                <Card style={style.card}>
                    <Card.Media
                        image={<Image source={{ uri: item.image }} />}
                        overlay
                    />
                    <Text style={style.cardTitle}>{item.title}</Text>

                    <Card.Body>
                        <Text style={style.content}>{item.body}</Text>
                    </Card.Body>

                </Card>
                <Divider />
            </TouchableOpacity>
        );
    }

}