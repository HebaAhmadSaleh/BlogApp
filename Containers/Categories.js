import React, { Component } from 'react';
import {
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView,
    FlatList,
    Modal
} from 'react-native';
import { API_URL } from 'react-native-dotenv';
import { getCategories } from '../utils/Api'

import CategoryItem from '../Components/CategoryItem';

export default class Categories extends Component {

    static navigationOptions = {
        title: 'Categories',
    }

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }

    checkLoading = () => {
        if (this.state.loading)
            return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' color='#81C341' /></View>)
    }


    _keyExtractor = (category) => category.id;

    renderCategories = () => {
        if (this.state.categories.length > 0) {
            return (
                <FlatList
                    data={this.state.categories}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns='2'
                    horizontal={false}
                />
            );
        }
        else {
            return (
                <View style={{ marginTop: 22 }}>
                   {this.checkLoading()}
                </View>
            );
        }
    }
    _renderItem = (category) => {
        return (
            <CategoryItem category={category}
                onPress={this.navigateToCategory} />
        )
    }

    navigateToCategory = (id, name) => {
        const { navigate } = this.props.navigation;
        navigate('myBloglist', { categoryId: id, name });
    }

    componentWillMount() {
        getCategories(API_URL).then((categories) => {
            if (categories)
                this.setState({ categories })
            return;
        });

    }
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                {this.renderCategories()}
            </View>
        )
    }
}