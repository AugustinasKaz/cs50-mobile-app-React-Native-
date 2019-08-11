import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {LiveFeed} from './components/api.js'
export default class HomeScreen extends React.Component {
  state ={
    display: '',
  }
  componentDidMount(){
     LiveFeed().then(response => this.setState({display:response}));
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}


HomeScreen.navigationOptions = ({ navigation }) => {
    return {
      title: 'HOME',
      headerRight:(
        <View style={{ margin: 20}}>
        <TouchableOpacity onPress={() =>navigation.toggleDrawer()}>
          <Ionicons name="md-reorder" size={28} color="black"/>
          </TouchableOpacity>
          </View>
      )
    };
  };
  
const styles = StyleSheet.create({

})  
  