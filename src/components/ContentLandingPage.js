import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Horizontal extends Component {
  componentDidMount () {
    this._scrollView.scrollTo({x: 0, y: 1, animated: false});
  }
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
        ref={component => this._scrollView = component}
      >
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}>LOGIN</Text>
        </View>
        <View style={styles.outer}>
          <Text style={styles.innerText}>LANDING PAGE (default page) </Text>
        </View>
        <View style={[styles.outer, styles.red]}>
          <Text style={styles.innerText}>WHAT CAN DO WE FOR YOU?</Text>
        </View>
        <View style={[styles.outer, styles.green]}>
          <Text style={styles.innerText}>HOW IT WORKS</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  outer: {
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  innerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  red: {
    backgroundColor: '#dd4b39',
  },
  green: {
    backgroundColor: '#27ae60',
  }
});
