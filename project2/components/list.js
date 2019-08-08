import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image,} from 'react-native';
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

export default withNavigation(List);

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
    }
});


/*<FlatList
                data={this.state.array}
                keyExtractor={item => item.id}
                renderItem={obj =>
                <TouchableOpacity  onPress={()=> this.PressMovie(obj.item.title)} >
                <Image source={{uri: obj.item.poster_url}} style={styles.img}/>
                <Text>{obj.item.title}</Text>
                </TouchableOpacity>}>
                </FlatList>*/