import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../assets/colors";
import strings from "../assets/string";
import Logo from "../component/Logo";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Logo />
        <View style={styles.mainContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 448,
    width: "100%",
    backgroundColor: "#59ADFF",
    margin: "auto",
  },

  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    marginTop: 16,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
  },
  title: {
    fontSize: 20,
    marginTop: 70,
    marginBottom: 30,
  },
  textInputStyle: {
    width: 230,
    height: 50,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 5,
  },
  btnLoginBg: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: colors.btnLoginKakao,
  },
  btnLoginKakao: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#FFEB33",
  },
  btnLoginFacebook: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#4267B2",
  },
  btnSignup: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#764ABC",
  },
  btnStyle: {
    color: "white",
    fontSize: 20,
  },
});
