import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'native-base';
import ContentLandingPage from '../components/ContentLandingPage';

class LandingPage extends Component {
  render() {
    return (
      <View>
        <ContentLandingPage />
      </View>
    )
  }
}

export default LandingPage;
