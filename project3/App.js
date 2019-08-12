import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen.js'
import Test from './components/test.js'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  rout1: HomeScreen,
  //rout2: Test,
});

const DrawerNavigator = createDrawerNavigator({
  AppNavigator, Test
});

const AppContainer = createAppContainer(DrawerNavigator);