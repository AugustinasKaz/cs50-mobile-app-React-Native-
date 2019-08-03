import React from 'react';
import {StyleSheet,TextInput, View, Text} from 'react-native';
import {fetchData} from './api.js'

export default class Home extends React.Component{
    state ={
        search: '',
    }
    update = e =>{
        this.setState({search: e.target.value})
        console.log(this.state.search);
    }
    test = () => {
        fetchData(this.state.search).then(response => console.log(response))
    } 
    render(){
        return(
            <View>
                <TextInput style={styles.input} value={this.state.search} onChange={this.update}/>
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





