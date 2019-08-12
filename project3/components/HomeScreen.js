import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import {LiveFeed} from './api.js'




export default class HomeScreen extends React.Component {
  state ={
    display: '',
  }
  componentDidMount(){
     LiveFeed().then(response => this.setState({display: response}));
  }
  renderArticle = (article) => {
    const item = article.item
    try{
    return(
      <View style={styles.article}>
        <Text>{item.date} {item.section}</Text>
        <Text>#{item.title}</Text>
        <Text>{item.picture.url}</Text>
      </View>
    )
    }catch(err){
      return(
        <View style={styles.article}>
          <Text>{item.date} {item.section}</Text>
          <Text>#{item.title}</Text>
          <Text>WWWWWW</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <View style={styles.main_feed}>
       <FlatList 
       data={this.state.display}
       keyExtractor={obj => obj.title}
       renderItem={this.renderArticle}/>
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
   main_feed:{
     flex:1,
     justifyContent: 'center'
   },
   article:{
     margin: 10,
     borderColor: 'black',
     borderRadius: 1,
   }
})  
  