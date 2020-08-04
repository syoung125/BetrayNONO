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
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>회원가입</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.mainTitle}></Text>
          </View>
          <View style={styles.socialLoginContainer}></View>
          <View style={styles.blankContainer}></View>
        </View>
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
    backgroundColor: "#f2f2f2",
    marginTop: 16,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingHorizontal: 32,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "200",
    fontFamily: "NanumSquareRoundR",
  },
  titleContainer: {
    flex: 2,
    paddingTop: 24,
    justifyContent: "center",
  },
  formContainer: { flex: 3 },
  socialLoginContainer: { flex: 3 },
  blankContainer: { flex: 2 },
});
