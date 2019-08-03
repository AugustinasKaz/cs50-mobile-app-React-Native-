import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Vibration } from 'react-native';

export default class App extends Component  {
  state = {
    min: 24,
    sec: 59,
    running: false,
    breakk: false
  };
  
  componentDidMount() {
     this.activate(this.state.running);
  }
  shouldComponentUpdate(){
    if(this.state.min == 0 && this.state.sec == 0){
      if(this.state.breakk == false){
      clearInterval(this.timer);
      this.setState({ min: 4, sec: 59, breakk: true});
      this.activate(this.state.running);
      }
      else{
        this.setState({ min: 24, sec: 59, breakk: false});
        clearInterval(this.timer);
        this.activate(this.state.running);
      }
      Vibration.vibrate(500);
    }
    return true;
  }
  activate = (bool) => {
      if (bool) {
      this.timer = setInterval(this.dicrease, 1000)
    }
    else{
      clearInterval(this.timer)
    }
  }

  
  dicrease = () => {
    this.setState(prevState => ({ sec: prevState.sec - 1 }));
    if (this.state.sec == 0) {
      this.setState(prevState => ({min: prevState.min - 1, sec: 59}));
    }
  };
  
  startStop = () =>{
    this.setState(prevState => ({ running: !prevState.running }));
    this.activate(!this.state.running);
  }
  reset = () =>{
    clearInterval(this.timer);
    this.setState({min: 24, sec: 59});
    this.setState({running: false });
  } 
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}> {this.state.breakk ? "Break time": "Working time"} </Text>
      <Text style={styles.time}>{this.state.min > 9 ? this.state.min : '0'+this.state.min} : {this.state.sec > 9 ? this.state.sec : '0'+this.state.sec}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Button title="Reset" onPress={this.reset} />
        <Button title={this.state.running ? 'Stop' : "Start"} onPress={this.startStop} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  time: {
    fontSize: 48,
  },
  title:{
    fontSize:36,
    fontFamily: 'Roboto',
  }
});
