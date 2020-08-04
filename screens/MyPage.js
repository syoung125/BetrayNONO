import { StatusBar } from "expo-status-bar";
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
import images from "../assets/images";

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
    <View style={styles.container}>
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
            <View style={styles.settingCol}>
              <Image source={images.setting} style={styles.settingCol}></Image>
            </View>
          </View>

          <View style={styles.profileDataColumn}>
            <Text style={{ color: 'white', fontSize: 18, }}> Lv. 25 </Text>
            <View style={styles.levelcontainer}>
              <View style={styles.levelbar}>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.likeBox}>
            <Text>aa</Text>

          </View>
          <View style={styles.historyBox}>
            <Text>aa</Text>

          </View>
          <View style={styles.alarmBox}>
            <Text>aa</Text>

          </View>

        </View>
        <View style={styles.gameContainer}>

          <Text>aa</Text>

        </View>
        <Button title="Start Page" onPress={pressHandler}></Button>

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
    margin: 'auto',

  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    flex: 2,
    width: '90%',
    backgroundColor: '#316da8',
    padding: 16,
    borderRadius: 10,

  },
  profileInfoColumn: {

    flexDirection: "row",
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  image: {
    //flex: 1,
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  nameText: {
    fontWeight: "600",
    fontSize: 25,
    color: 'white',
    padding: 20,
  },

  profileDataColumn: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,

  },
  item: {
    paddingHorizontal: 32,
    paddingVertical: 4,
  },
  levelcontainer: {
    backgroundColor: 'white',
    height: 20,
    marginTop: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 3,
    justifyContent: "center",
  },
  levelbar: {
    backgroundColor: '#F06374',
    height: 15,
    width: '100%',
    borderRadius: 10,
  },
  settingContainer: {
    paddingLeft: 60,
  },
  profileCol: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    //margin:10,
  },
  settingCol: {
    width: 25,
    height: 25,
  },

  menuContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 10,

    width: '90%',
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems:'center',
    
  },
  likeBox:{
    alignItems:'center',
    flex:1,
  },
  historyBox:{
    alignItems:'center',
    flex:1,
    
    borderRightWidth:0.5,
    borderRightColor:'lightgrey',
    borderLeftWidth:0.5,
    borderLeftColor:'lightgrey',
  },
  alarmBox:{
    alignItems:'center',
    flex:1,
    
  },
  gameContainer: {
    flex: 4,
  },
});

