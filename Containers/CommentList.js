import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    AppRegistry,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { Card, Button, Divider,  } from 'react-native-material-design';
import {Avatar, Row} from 'react-native-elements';

export class CommentList extends React.Component {

    _keyExtractor = comment => comment.id;

    _renderItem = (comment) => {
        return (
            <View style={styles.contentContainer}>
                <Avatar
                    small
                    rounded
                    source={{ uri: comment.item.image}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Text style={[styles.text, styles.name]}>{comment.item.name}</Text>

                <Text style={styles.text}>{comment.item.body}</Text>

            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.comments}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin:5,
        backgroundColor: 'white'
    },
    avatarContainer: {
        alignItems: 'center',
        marginLeft: 5,
        paddingTop: 10,
        width: 40,
    },
    contentContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#EEE',
        backgroundColor: 'white',
        padding: 5,
        marginVertical:5,
        marginHorizontal:10,

    },
    avatar: {
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 13,
        width: 26,
        height: 26,
    },
    text: {
        color: '#000',
        fontFamily: 'Avenir',
        fontSize: 15,
    },
    name: {
        fontWeight: 'bold',
        color:'#81C341'
    },
    created: {
        color: '#BBB',
    },
});