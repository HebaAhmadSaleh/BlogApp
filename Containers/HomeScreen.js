import React from 'react';
import {
    View,
    Image,
    AppRegistry,
    Text,
    ScrollView,
    FlatList
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Button, Divider } from 'react-native-material-design';
import BlogItem from '../Components/BlogItem';

import { blogDetailsHelpers } from './helpers/BlogDetails';
import { SideMenu, List, ListItem } from 'react-native-elements'

 import { API_URL } from 'react-native-dotenv';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: {},
            isOpen: false,
            Menulist : [{
                title: 'Categories',
                screen:"Categories"
            },
            {
                title: 'Home',
                screen: 'Home',
            },
            {
                title:'About Us',
                screen:"AboutUs"
            }
            ]
        }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);


    }

    static navigationOptions = ({ navigation }) => ({
        header:   null ,
        tabBarLabel: 'Home',
        //title:   this.props.navigation.state.params ?` ${navigation.state.params.name}` : ''
    });


    componentWillMount() {
        const { categoryId } = this.props.navigation.state.params ? this.props.navigation.state.params : 0 ;
        const blog = new blogDetailsHelpers();
        blog.getBlogs(API_URL, categoryId).then(blogs => this.setState({ blogs }));
    }


    _keyExtractor = blog => blog.id;

    _renderItem = (blog) => {
        return (
            <BlogItem blog={blog} _onPress={this._onPress} />
        )
    }

    _onPress = (item) => {
        const { navigate } = this.props.navigation;
        navigate('Blog', { blog: item});
    }

    _navigate = (toScreen) => {
        const { navigate } = this.props.navigation;
          navigate(toScreen); 

    }
    onSideMenuChange = (isOpen) => {
    this.setState({
        isOpen: isOpen
    })
    };

    toggleSideMenu = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
    }
    MenuComponent = () => {return(
        <View style={{flex: 1, backgroundColor: '#ededed'}}>
        <List containerStyle={{marginTop: 0}}>
        {
            this.state.Menulist.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    onPress ={()=>this._navigate(item.screen)}
                />
                ))
        }
        </List>
        </View>
    )};

    render() {
        return (
             <SideMenu
      isOpen={this.state.isOpen}
      onChange={this.onSideMenuChange.bind(this)}
      menu={this.MenuComponent()}>
            <FlatList
                data={this.state.blogs}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
            </SideMenu>
        );
    }
}

