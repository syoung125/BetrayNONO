import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import Logo from "../component/Logo";
import images from "../assets/images";
import globalStyle from "../styles/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const MyPage = ({ navigation }) => {
  const goToFollow = () => {
    Alert.alert("Follow this User");
    // NavigationService.navigate('Login', {
    //     screen: 'Login',
    //     info: 'information'
    // })
  };
  const handleStartB = () => {
    navigation.navigate("GameStart");
  };

  const handleHistoryBtn = () => {
    navigation.navigate("QuizList");
  };

  return (
    <View style={globalStyle.container}>
      {/* <LinearGradient colors={["#a1c4fd", "#a1c4fd", "#c2e9fb"]} style={{ flex: 1 }}> */}
      <StatusBar style="auto" />
      <Logo />
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileInfoColumn}>
            <View style={styles.profileCol}>
              <Image
                source={require("../assets/images/jennie.jpg")}
                style={styles.image}
              />
              <Text style={styles.nameText}>Hyunchocopie</Text>
            </View>

            <Image source={images.setting} style={styles.settingimg}></Image>
          </View>

          <View style={styles.profileDataColumn}>
            <Text style={{ color: "white", fontSize: 18 }}> Lv. 25 </Text>
            <View style={styles.levelcontainer}>
              <View style={styles.levelbar}></View>
            </View>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuBox}>
            <Image
              source={images.like}
              style={[styles.menuimg, { tintColor: "red" }]}
            ></Image>
            <Text style={[styles.boxText, { color: "red" }]}>123</Text>
          </View>
          <View style={styles.historyBox}>
            <TouchableOpacity
              onPress={handleHistoryBtn}
              style={styles.touchHistoryBox}
            >
              <Image source={images.history} style={styles.menuimg}></Image>
              <Text style={[styles.boxText]}>History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuBox}>
            <Image source={images.alarm} style={styles.menuimg}></Image>
            <Text style={[styles.boxText]}>3</Text>
          </View>
        </View>
        <View style={styles.gameContainer}>
          <Text>수정중이니까 신경쓰지마세여</Text>
        </View>
        <Button title="Start Page" onPress={handleStartB}></Button>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
    padding: 0,
    backgroundColor: "#59ADFF",
    margin: "auto",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  profileContainer: {
    flex: 2,
    width: "90%",
    backgroundColor: "#316da8",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  profileInfoColumn: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameText: {
    fontSize: 24,
    color: "white",
    padding: 20,
  },
  profileDataColumn: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 16,
  },

  levelcontainer: {
    backgroundColor: "white",
    height: 20,
    marginTop: 6,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 3,
    justifyContent: "center",
  },
  levelbar: {
    backgroundColor: "#F06374",
    height: 16,
    width: "100%",
    borderRadius: 10,
  },
  settingContainer: {
    alignItems: "flex-end",
    paddingLeft: 60,
  },
  profileCol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    //margin:10,
  },
  settingimg: {
    width: 26,
    height: 26,
  },
  menuimg: {
    width: 26,
    height: 26,
    marginTop: 5,
  },

  menuContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    width: "90%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  menuBox: {
    alignItems: "center",
    flex: 1,
  },
  historyBox: {
    alignItems: "center",
    flex: 1,
    borderRightWidth: 0.5,
    borderRightColor: "lightgrey",
    borderLeftWidth: 0.5,
    borderLeftColor: "lightgrey",
  },
  touchHistoryBox: {
    alignItems: "center",
  },
  boxText: {
    color: "grey",
    paddingTop: 5,
    fontSize: 16,
    fontFamily: "NanumSquareRoundEB",
  },
  gameContainer: {
    flex: 4,
    width: "90%",
    backgroundColor: "red",
  },
});
