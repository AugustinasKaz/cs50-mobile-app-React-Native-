import React from 'react';
import {StyleSheet, View, Text,FlatList, TouchableOpacity} from 'react-native';
import {fetchData} from './api.js'




export default class Home extends React.Component{
    constructor(props){
     super(props)
     this.state ={
        array: '',
     }
    }
    

    componentDidUpdate(prevProps){
        if(this.props.search !== prevProps.search)
            fetchData(this.props.search).then(response => {
               //console.log(response) 
               if(response !== false) 
                 this.setState({array: response})
            });                   
    }

    render(){
        return(
            <View>
               <FlatList
                data={this.state.array}
                keyExtractor={item => item.id}
                renderItem={obj =>
                <TouchableOpacity onPress={console.log("click")} >
                <Text>{obj.item.title}</Text>
                </TouchableOpacity>}/>  
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





