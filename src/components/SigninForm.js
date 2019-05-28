import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";

signInUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      this.props.navigation.replace("Home");
    })
    .catch(error => {
      alert(error.message);
    });
};

export default function() {

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled
    >
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} />
        <Text>2nd Coffee</Text>
      </View>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          style={styles.button}
          full
          rounded
          onPress={() => {
            this.signInUser(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </Button>
      </Form>
      <View style={styles.footer}>
        <Text>OR</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({register: true});
          }}
        >
          <Text>Create a new Account ?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%"
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});

