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

export default class SingUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Logo />
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{strings.SignupScreen.title}</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="아이디를 입력하세요."
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="이름을 입력하세요."
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="비밀번호를 입력하세요."
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="비밀번호 확인"
          />
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.btnSignup}>
              <Text style={styles.btnStyle}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
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
  btnSignup: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: colors.btnLoginKakao,
  },
  btnStyle: {
    color: "white",
    fontSize: 20,
  },
});
