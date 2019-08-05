import React from 'react';
import {StyleSheet,TextInput, View, Text} from 'react-native';
import List from './list.js';

export default class Home extends React.Component{
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
            <View>
                <TextInput style={styles.input} value={this.state.search} onChangeText={this.update}/>
                <List search={this.state.search}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'blue',
        borderWidth: 1,
          },
  });




