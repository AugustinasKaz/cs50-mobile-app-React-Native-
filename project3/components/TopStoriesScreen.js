import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class TopStoriesScreen extends React.Component {

  openStories = (section_name) =>{
    this.props.navigation.navigate('screen2', {name: 'asdd'})
  }
  render() {
    return (
      <View style={styles.main_feed}>
          <ScrollView>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('arts')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>arts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('automobiles')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>automobiles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('books')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('business')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('science')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>science</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('sports')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>sports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('movies')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('travel')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>travel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('politics')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>politics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={ () => this.openStories('national')}>
              <Text style={{ color: '#cce6ff', fontWeight: "bold", fontSize: 20}}>national</Text>
          </TouchableOpacity>
          </ScrollView>
      </View>
      
    );
  }
}

export default withNavigation(TopStoriesScreen);

TopStoriesScreen.navigationOptions = ({ navigation }) => {
    return {
      title: 'Top Stories Sections',
      headerStyle: {
        backgroundColor: '#cce6ff',
      },
      headerRight:(
        <View style={{ margin: 20}}>
        <TouchableOpacity style={styles.section} onPress={() =>navigation.toggleDrawer()}>
          <Ionicons name="md-reorder" size={28} color="black"/>
          </TouchableOpacity>
          </View>
      )
    };
  };
  
const styles = StyleSheet.create({
   main_feed:{
     flex:1,
     justifyContent: 'center',
     backgroundColor: '#333333',
     borderWidth: 10,
     borderColor: '#333333',
     alignItems: 'center',
   },
   section:{
       margin: 20,

   }
})  
  