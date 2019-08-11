import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen.js'


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  rout1: HomeScreen,
});

const DrawerNavigator = createDrawerNavigator({
  AppNavigator
});

const AppContainer = createAppContainer(DrawerNavigator);