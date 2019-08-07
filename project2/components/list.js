import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {fetchData} from './api.js'
import { withNavigation } from 'react-navigation';

class List extends React.Component{
    constructor(props){
     super(props)
     this.state ={
        array: '',
     }
    }
    
    componentDidUpdate(prevProps){
        if(this.props.search !== prevProps.search)
            fetchData(this.props.search).then(response => { 
               if(response !== false) 
                 this.setState({array: response})
            });                   
    }
    
    PressMovie = (name) =>{
        this.props.navigation.navigate('route2', {name: name})
    }
    
    render(){
        return(
            <View>
               <FlatList
                data={this.state.array}
                keyExtractor={item => item.id}
                renderItem={obj =>
                <TouchableOpacity  onPress={()=> this.PressMovie(obj.item.title)} >
                <Text style={styles.list_item}>{obj.item.title}</Text>
                </TouchableOpacity>}/>  
            </View>
        );
    }
}

export default withNavigation(List);

const styles = StyleSheet.create({
    list_item: {
        margin: 10,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1,
    },
  });


