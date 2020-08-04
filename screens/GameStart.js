import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import colors from "../assets/colors";
import images from "../assets/images";
import strings from "../assets/string";
import Logo from "../component/Logo";
import moveToBottom from "../library/utils/moveToBottom";

export default class GameStart extends React.Component {
  startGame() {
    Alert.alert("Start Button pressed");
    // Linking.openURL('http://google.com')
  }

  goToLogin() {
    Alert.alert("Login Button pressed");
    // NavigationService.navigate('Login', {
    //     screen: 'Login',
    //     info: 'information'
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <LinearGradient colors={['#91eae4', '#86a8e7', '#7f7fd5']} 
                style={styles.gContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.5 }}> */}
        <StatusBar style="auto" />
        <Logo />
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.title1}>{strings.gamestart.title1}</Text>
            <Text style={styles.title2}>{strings.gamestart.title2}</Text>
          </View>
          <Image source={images.monkey} style={styles.mainImage}></Image>
          {moveToBottom(
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btnStartBg}
                onPress={() => {
                  this.props.navigation.navigate("GamePage");
                }}
              >
                <LinearGradient
                  colors={["transparent", "#dc13f0"]}
                  start={[0, 1]}
                  end={[1, 0]}
                  style={styles.gradient}
                >
                  <Text style={styles.btnStyle}>시작하기</Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style={styles.btnRowContainer}>
                <TouchableOpacity
                  style={styles.btnLoginBg}
                  onPress={() => {
                    this.props.navigation.navigate("SignIn");
                  }}
                >
                  <Text style={styles.btnStyle}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnSignUpBg}
                  onPress={() => {
                    this.props.navigation.navigate("SignUp");
                  }}
                >
                  <Text style={styles.btnStyle}>회원가입</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#59ADFF",
    margin: "auto",
  },
  gContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  title1: {
    fontFamily: "Capriola-Regular",
    fontSize: 48,
    marginTop: 50,
    fontWeight: "600",
    color: "white",
    textShadowColor: "grey",
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 7,
  },
  title2: {
    fontFamily: "Capriola-Regular",
    fontSize: 24,
    marginTop: 10,
    color: "white",
    textShadowColor: "grey",
    textShadowOffset: { width: -1, height: 3 },
    textShadowRadius: 7,
  },
  mainImage: {
    width: 240,
    height: 240,
    marginTop: 20,
    marginBottom: 60,
  },
  btnContainer: {
    alignItems: "center",
    flex: 1,
  },
  btnStartBg: {
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
  },
  btnRowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 5,
  },
  btnLoginBg: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 20,
  },
  btnSignUpBg: {
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 20,
  },
  btnStyle: {
    color: "white",
    fontSize: 22,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
  },
});
