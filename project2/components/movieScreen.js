import React from 'react';
import {StyleSheet, View, Text,FlatList, TouchableOpacity} from 'react-native';
import {fetchMovieData} from './api.js'

export default class Home extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  componentDidMount(){
    fetchMovieData(this.props.navigation.getParam('name'))
  }    
    render(){
        return(
            <View>
               <Text>{this.props.navigation.getParam('name')}</Text>
            </View>
        );
    }
}






