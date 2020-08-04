import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles/Styles";
import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Button,
  Alert,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import Logo from "../component/Logo";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const MyPage = ({ navigation }) => {
  const goToFollow = () => {
    Alert.alert("Follow this User");
    // NavigationService.navigate('Login', {
    //     screen: 'Login',
    //     info: 'information'
    // })
  };
  const pressHandler = () => {
    navigation.navigate("GameStart");
  };
  return (
    <View style={globalStyle.container}>
      <LinearGradient
        colors={["#a1c4fd", "#a1c4fd", "#c2e9fb"]}
        style={{ flex: 1 }}
      >
        <StatusBar style="auto" />
        <Logo />
        <View style={styles.mainContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileInfoColumn}>
              <Image
                source={require("../assets/images/jennie.jpg")}
                style={styles.image}
              />
              <View style={styles.profileInfoTextColumn}>
                <Text style={styles.infoText}>Jennie</Text>
                <TouchableOpacity
                  style={styles.followBtnBg}
                  onPress={goToFollow}
                >
                  <Text style={styles.followBtnText}>Follow</Text>
                </TouchableOpacity>
                <Text style={styles.infoDescription}>BlackPink - Jennie</Text>
              </View>
            </View>
            <View style={styles.profileDataColumn}></View>
          </View>

          <View style={styles.profileMenuContainer}>
            <FlatList
              horizontal={true}
              data={[
                { key: "My Quizs" },
                { key: "My Likes" },
                { key: "Following" },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
              )}
            />
          </View>
          <Button title="Start Page" onPress={pressHandler}></Button>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
  },
  profileInfoColumn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    flexWrap: "wrap",
  },
  image: {
    flex: 1,
    maxWidth: 60,
    maxHeight: 60,
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
  profileInfoTextColumn: {
    width: "30%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 8,
  },
  infoText: {
    fontWeight: "600",
    fontSize: 18,
  },
  followBtnBg: {
    marginLeft: 8,
    backgroundColor: "skyblue",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  followBtnText: { color: "#f6f6f6" },
  infoDescription: {
    fontWeight: "400",
    fontSize: 14,
    marginTop: 4,
  },
  profileMenuContainer: {
    flex: 9,
  },
  profileMenu: {},
  item: {
    paddingHorizontal: 32,
    paddingVertical: 4,
  },
});
