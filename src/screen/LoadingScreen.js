import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

import HomeForm from "../components/HomeForm";
import SigninForm from "../components/SigninForm";

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      role: ""
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({role: "TALENT"})
      } else {
        this.setState({role: ""});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        {
          this.state.role === "TALENT" ? <HomeForm /> : <SigninForm />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
