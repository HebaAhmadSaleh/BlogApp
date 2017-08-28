import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
  Linking,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Card, Avatar, Button } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';

import BlogItem from '../Components/BlogItem';
import { getAuthorInfo, getBlogsByAuthor } from '../utils/Api'

export default class AuthorDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Author',
  }

  constructor(props) {
    super(props);
    this.state = {
        authorName: '',
        authorImage: '',
        authorWebsite: '',
        authorFacebook: '',
        authorTwitter: '',
        authorInstgram: '',
        blogs: []
    }
  }

  componentWillMount() {
    const authorId = this.props.navigation.state.params.auth_id;

    getAuthorInfo(authorId)
      .then((author) => {
        this.setState({
          authorName: author.name,
          authorImage: author.image,
          authorWebsite: author.website,
          authorFacebook: author.address.facebook,
          authorTwitter: author.address.twitter,
          authorInstgram: author.address.instgram,
        })
        console.log(this.state);
        return;
      });

    getBlogsByAuthor(authorId)
      .then((blogs) => {
        this.setState({ blogs })
        return;
      });

    // console.log(this.props.navigation.state.params);
  }

  goToLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
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

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: this.props.navigation.state.params.auth_image}} style={styles.userImg} />
          {/* <Image source={{uri: this.state.authorImage}} style={styles.userImg} /> */}
          <Text style={styles.welcomeMsg}>{this.props.navigation.state.params.auth_name}</Text>

          <View style={styles.iconsWrap}>
            <TouchableOpacity style={styles.iconBtn} onPress={() => this.goToLink('https://facebook.com')}>
              <Text>
                <Icon name="facebook" size={24} color="#3b5998" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={() => this.goToLink('https://twitter.com')}>
              <Text>
                <Icon name="twitter" size={24} color="#00b6f1" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress={() => this.goToLink('https://instagram.com')}>
              <Text>
                <Icon name="instagram" size={24} color="#c32aa3" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={() => this.goToLink('https://wuzzuf.com')}>
              <Text>
                <Icon name="link" size={24} color="#000" />
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.taskList}>
            <View style={styles.task}>
              <Text style={styles.taskNumber}>+12k</Text>
              <Text style={styles.taskTitle}><Icon name="eye" size={24} color="green" /></Text>
            </View>
            <View style={styles.task}>
              <Text style={styles.taskNumber}>+1.5K</Text>
              <Text style={styles.taskTitle}><Icon name="heart" size={24} color="#f00" /></Text>
            </View>
            <View style={styles.task}>
              <Text style={styles.taskNumber}>+25k</Text>
              <Text style={styles.taskTitle}><Icon name="share-alt" size={24} color="blue" /></Text>
            </View>
          </View>
        </View>
        <View style={{flex:1}}>
            <FlatList
                data={this.state.blogs}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingRight:15,
    paddingLeft: 15,
    backgroundColor: '#EEEEEE',
  },
   userImg: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  welcomeMsg: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:15,
    marginBottom: 20,
  },
  taskList:{
    marginTop: 30,
    flexDirection: 'row',
  },
  task: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 5,
    paddingLeft: 5,

  },
  taskTitle: {
    fontSize: 18,
    color: '#9E9E9E',
  },
  taskNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  iconsWrap: {
    flexDirection: 'row'
  },
  iconBtn: {
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: '#ddd',
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});