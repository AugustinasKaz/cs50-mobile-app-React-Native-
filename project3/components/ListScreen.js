import React from 'react';
import {StyleSheet, View, Text,Image, Dimensions, ProgressBarAndroid,ScrollView} from 'react-native';
import {Fetch_Books} from './api.js'



export default class ListScreen extends React.Component{
   state = {
       books: ''
   }  
   componentDidMount(){
        Fetch_Books(this.props.navigation.getParam('ln'), this.props.navigation.getParam('lp')).then(response => this.setState({books: response}))
   }

    render(){
        return(
            <View style={styles.list}>
            <FlatList
             data={this.state.array}
             keyExtractor={item => item.id}
             renderItem={obj =>
             <TouchableOpacity onPress={()=> this.PressMovie(obj.item.title)} >
             <View style={styles.view}>
              <Image style={styles.img} resizeMode='stretch' source={obj.item.poster_url !== 'N/A' ? { uri: obj.item.poster_url } : {uri:'https://dummyimage.com/600x400/524f52/808fff.jpg&text=No+image'}}/>
              <View style={styles.column}>
                  <Text style={styles.title}>{obj.item.title}</Text>
                  <View style={styles.row}>
                      <Text>({obj.item.year})</Text>
                      <Text>&nbsp;{obj.item.type}</Text>
                  </View>
              </View>
             </View>
             </TouchableOpacity>}>
             </FlatList>
         </View>
            
        );
    }
}

ListScreen.navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
            fontSize: 10,
            backgroundColor: '#cce6ff',
      },
      title: navigation.getParam('ln'),
    };
  };