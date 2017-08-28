
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
import { style } from './Styles/CategoryItemStyle';

export default class CategoryItem extends Component {
    render() {
        const { item } = this.props.category;
        return (
            <TouchableOpacity onPress={()=>this.props.onPress(item.id,item.name)} style={style.category}>
                 {/* <Card style={style.card}>
                     <Card.Media
                        image={<Image source={{ uri: item.image }} />}
                        overlay
                    />
                    <Text style={style.cardTitle}>{item.name}</Text>
                </Card>
                <Divider /> */}
            </TouchableOpacity>
        );
    }

}