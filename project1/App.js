import React, { Component } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { Constants } from 'expo';

class Counter extends React.Component {
  state = {
    minutes: 24,
    seconds: 60,
  }
  
  componentDidMount() {
    this.timer = setInterval(this.dicrease, 1000)
  }
  
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  dicrease = () => {
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
    if(this.state.seconds == 0){
      this.setState(prevState => ({minutes: prevState.minutes - 1, seconds: 60}))
    }
  }
  
  render() {
    return <Text>{this.state.minutes} : {this.state.seconds}</Text>
  }
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stop: true,
    }
  }

  startCount = () => this.setState(prevState => ({ start: !prevState.start,}));

  stopCount = () => 
  render() {
    if(this.state.start){
    return (
      <View style={styles.container}>
      <Button title="Reset" onPress={this.startCount}/>
      <Button title="Stop" onPress={this.stopCount}/>
        <Counter />
      </View>
    );
    }
    else{
      return(
      <View style={styles.container}>
      <Button title="Start" onPress={this.startCount}/>
      </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
