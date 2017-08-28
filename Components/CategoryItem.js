
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
        let color = item.color;
        console.log(item)
        return (
            <TouchableOpacity onPress={() => this.props.onPress(item.id, item.name)} style={[style.category,{backgroundColor:color}]}>
                <View>
                    <Image source={{ uri: item.image }} resizeMode='contain' style={style.image}/>
                    <Text style={style.cardTitle}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}