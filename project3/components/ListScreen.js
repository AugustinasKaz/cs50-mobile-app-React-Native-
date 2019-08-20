import React from 'react';
import {StyleSheet, View, Text,Image, Dimensions, Linking, FlatList, TouchableOpacity} from 'react-native';
import {Fetch_Books} from './api.js'



export default class ListScreen extends React.Component{
   state = {
       books: ''
   }  
   componentDidMount(){
        Fetch_Books(this.props.navigation.getParam('ln'), this.props.navigation.getParam('lp')).then(response => this.setState({books: response}))
   }

   openBook = (book_link) => {
     Linking.openURL(book_link)
   }

   display_list = (book) => {
       const item = book.item
       return (
            <TouchableOpacity onPress={ () => this.openBook(item.url)}>
             <View style={styles.view}>
              <Image style={styles.img} resizeMode='stretch' source={{uri:item.image}}/>
              <View style={styles.column}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.row}>
                <Text style={{color: '#cce6ff'}}>{item.author}</Text>
                </View>
              </View>
             </View>
            </TouchableOpacity>
       )
   }

    render(){
        return(
            <View style={styles.list}>
            <FlatList
             data={this.state.books}
             keyExtractor={item => item.name}
             renderItem={this.display_list}/>
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

  const styles = StyleSheet.create({
    textinput: {
        backgroundColor: '#fff',
        padding: 8,
    },
    img: {
        marginRight: 10,
        height: 100,
        width: 100,
        backgroundColor: '#524f52'
    },
    view: {
        margin: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        color: '#cce6ff',
        maxWidth: 300
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    list:{
        flex: 1,
        backgroundColor: '#333333'
    },
    intro_txt:{
        color: '#002080',
        opacity: 0.6,
        alignSelf: 'center',
        fontSize:28,

    }
});
