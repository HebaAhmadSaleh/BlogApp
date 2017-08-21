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

import { categoriesHelpers } from './helpers/categories';
import CategoryItem from '../Components/CategoryItem';

export default class Categories extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }
    }


    _keyExtractor = (category) => category.id;

    renderCategories = () => {
               if (this.state.categories.length > 0) {
            return (
                <FlatList
                    data={this.state.categories}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            );
        }
        else {
            return (
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text> Please Run data file.</Text>

                        </View>
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
        navigate('Home', { categoryId: id, name });
    }

    componentWillMount() {
        const category = new categoriesHelpers();
        category.getCategories(API_URL).then((categories) => {
            if (categories)
                this.setState({ categories })
            return;
        });

    }
    render() {
        return(
            <View>
                { this.renderCategories()}
            </View>
       )
    }
}