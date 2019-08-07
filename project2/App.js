import React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer,createStackNavigator } from 'react-navigation';
import HomeScreen from './components/homeScreen.js'
import MovieScreen from './components/movieScreen.js'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const MyNavigator = createStackNavigator({
    route1: HomeScreen,
    route2: MovieScreen,
});

const AppContainer = createAppContainer(MyNavigator);