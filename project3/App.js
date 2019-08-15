import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen.js'
import BooksScreen from './components/BooksScreen.js'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  route1: HomeScreen,
});

const Books = createStackNavigator({
  route1: BooksScreen
})
const DrawerNavigator = createDrawerNavigator({
  "Home": AppNavigator,
  "NYT best-sellers lists": Books,
  
});

const AppContainer = createAppContainer(DrawerNavigator);