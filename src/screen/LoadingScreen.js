import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from "react-native";
import * as firebase from "firebase";

import HomeForm from "../components/HomeForm";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";


export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      role: "",
      email: "",
      password: "",
      name: "",
      register: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({
          role: "TALENT",
          email: authenticate.email,
          name: authenticate.displayName,
        })
      } else {
        this.setState({
          role: "",
          email: "cdog@cn.com",
          password: "password",
          name: "courage",
        });
      }
    });
  }

  render() {
    return (
      <ScrollView
        horizontal={false}
        pagingEnabled={false}
        style={styles.container}
      >
        { this.state.role === "TALENT" ? HomeForm.call(this) : 
          ( this.state.register ? SignupForm.call(this) : SigninForm.call(this) )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
