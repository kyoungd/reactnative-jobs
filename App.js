import React from 'react';
import * as firebase from "firebase";
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import store from './src/store';
import JobBoardPage from './src/screen/JobBoardPage';
import LandingPage from './src/screen/LandingPage';
import LoadingScreen from './src/screen/LoadingScreen';
import MessagePage from './src/screen/MessagePage';
import OfferListPage from './src/screen/OfferListPage';
import RegisterTalentPage from './src/screen/RegisterTalentPage';
import MainPage from './src/screen/MainPage';

var config = {
  apiKey: "AIzaSyDwa-JMtMPP8UMea52QIAzXW01tddV37J0",
  authDomain: "secondcoffee-48806.firebaseapp.com",
  databaseURL: "https://secondcoffee-48806.firebaseio.com",
  projectId: "secondcoffee-48806",
  storageBucket: "secondcoffee-48806.appspot.com",
  messagingSenderId: "1031848241926",
  appId: "1:1031848241926:web:24dc72ab001dab76"
};

firebase.initializeApp(config);

const MainNavigator = createBottomTabNavigator({
  home: { screen: LandingPage },
  login: { screen: LoadingScreen },
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
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
    this.setState({isReady: true});
  }
  
  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    };
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
