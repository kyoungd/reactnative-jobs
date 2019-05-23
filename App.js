import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/store';
import JobBoardPage from './src/screen/JobBoardPage';
import LandingPage from './src/screen/LandingPage';
import LoginPage from './src/screen/LoginPage';
import MessagePage from './src/screen/MessagePage';
import OfferListPage from './src/screen/OfferListPage';
import RegisterTalentPage from './src/screen/RegisterTalentPage';
import MainPage from './src/screen/MainPage';

const MainNavigator = createBottomTabNavigator({
  home: { screen: LandingPage },
  login: { screen: LoginPage },
  register: { screen: RegisterTalentPage },
  talent: {
    screen: createBottomTabNavigator({
      main: { screen: MainPage },
      jobs: { screen: JobBoardPage },
      offers: { screen: OfferListPage },
      messages: { screen: MessagePage }
    })
  }
});
 
const AppContainer = createAppContainer(MainNavigator);
 
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
 

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
