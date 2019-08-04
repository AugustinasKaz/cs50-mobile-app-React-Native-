import React from 'react';
import {StyleSheet,TextInput, View, Text} from 'react-native';
import {fetchData} from './api.js'

export default class Home extends React.Component{
    constructor(){
     super()
     this.state ={
        search: '',
     }
    }
    update = (text) =>{
        this.setState({search: text})
    }
    componentDidUpdate(){
        fetchData(this.state.search).then(response => console.log(response.Title));           
    }
    render(){
        return(
            <View>
                <TextInput style={styles.input} value={this.state.search} onChangeText={this.update}/>
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









