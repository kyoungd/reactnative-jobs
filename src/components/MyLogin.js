/* @flow */

import React, { Component } from 'react';
import {
  View, Text, Image, Dimensions,
  KeyboardAvoidingView, StyleSheet,
} from 'react-native';
import Myform from './Myform';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

export default class MyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      register: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.register ? <SignupForm /> : <SigninForm /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
