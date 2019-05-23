import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-elements';
import ContentLandingPage from '../components/ContentLandingPage';

class LandingPage extends Component {
  render() {
    return (
      <View>
        <ContentLandingPage />
        <Text>LandingPage</Text>
        <Text>LandingPage</Text>
        <Text>LandingPage</Text>
        <Text>LandingPage</Text>
      </View>
    )
  }
}

export default LandingPage;
