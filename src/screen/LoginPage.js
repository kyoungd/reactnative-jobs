import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'native-base';
import MyLogin from '../components/MyLogin';

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <MyLogin />
      </React.Fragment>
    )
  }
}

export default LoginPage
