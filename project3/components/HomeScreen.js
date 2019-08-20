import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList, ScrollView } from 'react-native-gesture-handler';
import {LiveFeed} from './api.js'

export default class HomeScreen extends React.Component {
  state ={
    display: '',
  }

  componentDidMount(){
     LiveFeed().then(response => this.setState({display: response}));
  }

  openArticle = (url1) => {
    Linking.openURL(url1)
  }

  renderArticle = (article) => {
    const item = article.item
    const screen_width = Dimensions.get('window').width
    try{
      if(screen_width > 450){
       return(
        <TouchableOpacity onPress={ () => this.openArticle(item.url)}>
        <View style={styles.article}>
          <Text style={{alignSelf:'center', marginRight: 15, fontSize: 14}}>{item.date}</Text>
          <View style={styles.column}>
          <Text style={{fontWeight: "bold", fontSize: 12, fontFamily: 'monospace'}}>{item.section}</Text>
          <Text style={{fontWeight: "bold", fontSize: 16, color: '#cce6ff'}}>{item.title}</Text>
          <Text>{item.abstract}</Text>
          <Text style={{fontWeight: "bold", fontSize: 10, fontFamily: 'sans-serif-light', marginTop: 5}}>{item.author}</Text>
          </View>
          <Image resizeMode='stretch' style={styles.img} source={{uri:item.picture.url}}/>
        </View>
        </TouchableOpacity>
      )
    }
    else{
      return(
        <View style={styles.article_sm}>
            <Text style={styles.date_sm}>{item.date}</Text>
            <View style={styles.column_sm}>
            <TouchableOpacity onPress={ () => this.openArticle(item.url)}> 
            <Image resizeMode='stretch' style={styles.img_sm} source={{uri:item.picture.url}}/>
            <Text style={{fontWeight: "bold", fontSize: 10, fontFamily: 'monospace'}}>{item.section}</Text>
            <Text style={{color: '#cce6ff', fontWeight: "bold", fontSize: 14}}>{item.title}</Text>
          </TouchableOpacity>
          <ScrollView>
          <Text>{item.abstract}</Text>
          <Text style={{fontWeight: "bold", fontSize: 10, fontFamily: 'sans-serif-light', marginTop: 5}}>{item.author}</Text>
          </ScrollView>
          </View>
        </View>
        
      )
    }
    }catch(err){
      return(
        <View>
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
      headerStyle: {
        backgroundColor: '#cce6ff',
      },
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
     justifyContent: 'center',
     backgroundColor: '#333333'
   },
   article:{
     height: Dimensions.get('window').height *.20,
     flexDirection: 'row',
     borderRadius: 20,
     backgroundColor: '#737373',
     margin: 10,
     padding: 10,
   },
   article_sm:{
    height: Dimensions.get('window').height *.40,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#737373',
    margin: 10,
    padding: 10,
  },
   img:{
     height: Dimensions.get('window').height *.15,
     width: Dimensions.get('window').height *.15,
     margin: 5,
     borderRadius: 20,
   },
   img_sm:{
    height: Dimensions.get('window').height *.20,
    borderRadius: 5,
    marginBottom: 10,
  },
   column:{
     margin:5,
     flexDirection: 'column',
     width: Dimensions.get('window').width *.53,
   },
   column_sm:{
    marginLeft:10,
    margin:5,
    flexDirection: 'column',
    width: Dimensions.get('window').width *.75,
  },
  date_sm:{
    alignSelf:'center' , 
    fontFamily: 'monospace',
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#333333',
  }
})  
  