import React from "react";
import globalStyle from "../styles/Styles";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../component/Logo";

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={globalStyle.container}
        behavior="height"
        enabled
      >
        <StatusBar style="auto" />
        <Logo />
        <View style={globalStyle.bgWhiteContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>회원가입</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="아이디를 입력하세요"
            ></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호를 입력하세요"
            ></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호를 한 번 더 입력하세요"
            ></TextInput>
          </View>
          <View style={styles.socialLoginContainer}>
            <Text style={styles.slTitle}>SNS 계정으로 회원가입</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#1ec800" }]}
              >
                <Text style={styles.btnText}>N</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#3b5998" }]}
              >
                <Text style={styles.btnText}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#ffe812" }]}
              >
                <Text
                  style={[styles.btnText, { color: "#020202", opacity: 0.6 }]}
                >
                  K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#e74c3c" }]}
              >
                <Text style={styles.btnText}>G</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.blankContainer}></View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    marginTop: 16,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingHorizontal: 48,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "200",
    fontFamily: "NanumSquareRoundR",
    opacity: 0.7,
  },
  titleContainer: {
    flex: 2,
    paddingTop: 24,
    justifyContent: "center",
  },
  inputContainer: { flex: 3 },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#bdc3c7",
    paddingBottom: 8,
    paddingLeft: 4,
    marginBottom: 24,
    fontSize: 16,
  },
  socialLoginContainer: {
    flex: 3,
    alignItems: "center",
    paddingTop: 16,
  },
  slTitle: { opacity: 0.5 },
  btnContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  socialLoginBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020202",
    borderRadius: Dimensions.get("window").width / 2,
    borderRadius: Dimensions.get("window").height / 2,
  },
  btnText: { fontSize: 24, fontFamily: "NanumSquareRoundB", color: "#F2F2F2" },
  blankContainer: { flex: 2 },
});
