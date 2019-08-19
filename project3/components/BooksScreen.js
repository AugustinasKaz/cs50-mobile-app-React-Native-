import React from 'react';
import { Text, View, Dimensions, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {Fetch_Books_Lists} from './api.js'

export default class BooksScreen extends React.Component {
  state={
    list_array: ''
  }  
  
 componentDidMount(){
    Fetch_Books_Lists().then(response => this.setState({list_array: response}));
 }

 openList = (name) => {

 }
 
 display_lists = (list) => {
   const item = list.item
   return(
        <TouchableOpacity onPress={()=> this.openList(item.name)}>
        <View style={styles.row}>
          <Text style={{color: 'white', marginRight: 15, fontSize: 18}}>{item.published}</Text>
          <View style={styles.column}>
          <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>{item.name}</Text>
          <Text style={{color: 'white', fontWeight: "bold", fontSize: 12, fontFamily: 'monospace'}}>Updated: {item.updated}</Text>
          </View>
        </View>
        </TouchableOpacity>
   )
 }

  render() {
    return (
      <View style={styles.main_feed}>
       <FlatList 
       data={this.state.list_array}
       keyExtractor={obj => obj.name}
       renderItem={this.display_lists}/>
      </View>
    );
  }
}

BooksScreen.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      backgroundColor: '#cce6ff',
    },
    title: 'NYT best-sellers lists',
    headerRight:(
      <View style={{ margin: 20, backgroundColor: '#cce6ff'}}>
      <TouchableOpacity onPress={() =>navigation.toggleDrawer()}>
        <Ionicons name="md-reorder" size={28} color="black"/>
        </TouchableOpacity>
        </View>
    )
  };
};
  

const styles = StyleSheet.create({
  main_feed:{
    borderWidth: 20,
    borderColor: '#333333',
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#333333'
  },
  row: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  column:{
    alignSelf: 'center',
    flexDirection: 'column',
  },
})  