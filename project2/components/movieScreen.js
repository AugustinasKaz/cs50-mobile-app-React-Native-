import React from 'react';
import {StyleSheet, View, Text,Image, Dimensions, ProgressBarAndroid,ScrollView} from 'react-native';
import {fetchMovieData} from './api.js'



export default class Home extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  state ={
    data: '',
  }
  componentDidMount(){
    fetchMovieData(this.props.navigation.getParam('name')).then(response => { 
      if(response !== false) 
        this.setState({data: response})
        
   });  
  }    
    render(){
       const item = this.state.data;
        return(
            <View style={styles.container}>
              <ScrollView >
              <View style={styles.container_small}>
               <Text style={styles.txt_small}>{item.Country} | {item.Genre} | {item.Runtime}</Text>
              </View>
              <Image style={styles.img} resizeMode='stretch' 
              source={item.Poster !== 'N/A' ? { uri: item.Poster } : {uri:'https://dummyimage.com/600x400/524f52/808fff.jpg&text=No+image'}}/>
              <View style={styles.txt_main}>
               <Text>{item.Plot}</Text>
               </View>
               <View style={styles.txt_info}>
               <Text><Text style={{fontWeight: "bold"}}>Director</Text> : {item.Director}{'\n'}
               <Text style={{fontWeight: "bold"}}>Writer</Text> : {item.Writer}{'\n'}
               <Text style={{fontWeight: "bold"}}>Actors</Text> : {item.Actors}</Text>
               </View>
               </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
  container: {
    borderWidth:20,
    borderColor: '#809fff',
    flex:1,
    backgroundColor:'#809fff',
  },
  img: {
    alignSelf: 'center',
    width: (Dimensions.get('window').width - 30) * .75,
    height: (Dimensions.get('window').width - 30) * .75,
    backgroundColor: '#809fff',
  },
  container_small:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    backgroundColor:'#809fff',
    height: 70,
    borderWidth: 10,
    borderColor: '#809fff'
  },
  txt_small:{
    color: '#002080',
    opacity: 0.8,
    fontSize: 18,
    alignSelf: 'center',
  },
  txt_main:{
    padding:20,
    fontSize: 14,
  },
  txt_info:{
    flexDirection: 'row',
    padding:20,
    fontSize: 14,
  }
});






/*<View>
               <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5}/>
               </View>*/