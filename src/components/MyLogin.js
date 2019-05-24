/* @flow */

import React, { Component } from 'react';
import {
  View, Text, Image, Dimensions,
  KeyboardAvoidingView, StyleSheet,
} from 'react-native';
import Myform from './Myform';

export default class MyLogin extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

        <View style={styles.logocontainer}>
          <Image 
            style={styles.logo}
            source={require('./images/lcologo.png')}
          />
          <Text style={styles.title}>Change the world</Text>
        </View>
        <View style={styles.myform}>
          <Myform />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

/*
      <View>
        <Image 
          style={styles.logo}
          source={require('./images/lcologo.png')}
        />
        <Text style={styles.title}>A simple login App</Text>
      </View>
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282830',
    width: Dimensions.get('window').width,
  },
  logocontainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    marginTop: 10,
  },
  myform: {
    flex: 1,
  },
});
