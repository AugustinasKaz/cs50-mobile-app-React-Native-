import React from 'react';
import {StyleSheet,TextInput, View} from 'react-native';
import List from './list.js'

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Home',
      };
    constructor(props){
     super(props)
     this.state ={
        search: '',
     }
    }
    update = (text) =>{
        this.setState({search: text})
    }
    render(){
        return(
            <View style={styles.container1}>
                <TextInput style={styles.input} value={this.state.search} onChangeText={this.update}/>
                <List search={this.state.search}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        padding: 5,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#002080',
        borderWidth: 3,
        backgroundColor: 'white'
    },
    container1:{
        flex:1,
        backgroundColor:'#809fff',
    }
  });




