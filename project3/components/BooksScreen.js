import React from 'react';
import { Text, View, Dimensions, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, SectionList} from 'react-native-gesture-handler';
import {Fetch_Books_Lists} from './api.js'

export default class BooksScreen extends React.Component {
  state={
    list_array: ''
  }  
  
 componentDidMount(){
    Fetch_Books_Lists().then(response => this.setState({list_array: response}));
    
 }
 

  render() {
    return (
      <View style={styles.main_feed}>
       <SectionList
  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
  renderSectionHeader={({section: {title}}) => (
    <Text style={{fontWeight: 'bold'}}>{title}</Text>
  )}
  sections={[
    {title: 'Title1', data: ['item1', 'item2']},
    {title: 'Title2', data: ['item3', 'item4']},
    {title: 'Title3', data: ['item5', 'item6']},
  ]}
  keyExtractor={(item, index) => item + index}
/>
      </View>
    );
  }
}

BooksScreen.navigationOptions = ({ navigation }) => {
  return {
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
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#333333'
  },
})  