import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen.js'
import BooksScreen from './components/BooksScreen.js'
import ListScreen from './components/ListScreen.js'
import TopStoriesScreen from './components/TopStoriesScreen.js'
import TopArticles from './components/TopArticles.js'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  route1: HomeScreen,
});

const Books = createStackNavigator({
   display1: BooksScreen,
   display2: ListScreen,
})

const Stories = createStackNavigator({
  screen1: TopStoriesScreen,
  screen2: TopArticles
})

const DrawerNavigator = createDrawerNavigator({
  "Home": AppNavigator,
  "NYT Best-Sellers Lists": Books,
  "NYT Top Stories": Stories,
},
{
  initialRouteName: 'Home',
  drawerBackgroundColor: '#cce6ff',
});

const AppContainer = createAppContainer(DrawerNavigator);