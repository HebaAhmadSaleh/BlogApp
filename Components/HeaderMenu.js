import React from 'react';
import {
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { styles } from './Styles/HeaderMenuStyle';

export default class HeaderMenu extends React.Component {

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity>
                    <Icon name="bars" style={styles.icon} />
                </TouchableOpacity>
            </View>);
    }
}