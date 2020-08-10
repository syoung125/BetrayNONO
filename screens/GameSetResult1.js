import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles/Styles";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Logo from "../component/Logo";
import images from "../assets/images";
import Styles from "../styles/Styles";
import strings from "../assets/string";

const GameSetResult1 = ({ navigation }) => {

  return (
    <View style={globalStyle.container}>
      <StatusBar style="auto" />
      <Logo />
      <View style={styles.mainContainer}>
        <View style={styles.popContainer}>
          <Text style={styles.NameText}>HyunChocopie 님은</Text>
          <Image source={images.monkey} style={styles.mainImage} />
          <Text style={styles.titleText}>아기 원숭이</Text>
          <View style={styles.scrollViewContainer}>
            <ScrollView style={styles.scrollTextView}>
              <Text style={styles.contentText}>{strings.dummy.title}</Text>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.shareBtn}>
            <Image source={images.share} style={styles.shareImg}></Image>
            <Text style={styles.shareText}>결과 공유</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GameSetResult1;
  
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  popContainer: {
    width: "100%",
    height: "95%",
    backgroundColor: "#F6FAFE",
    borderRadius: 40,
    alignItems: "center",
  },
  NameText: {
    fontFamily: "NanumSquareRoundB",
    fontSize: 25,
    marginTop: 50,
  },
  mainImage: {
    width: 200,
    height: 200,
    marginTop: 30,
    marginBottom: 30,
  },
  titleText: {
    fontFamily: "NanumSquareRoundR",
    fontSize: 20,
    marginBottom: 30,
  },
  scrollViewContainer: {
    width: "80%",
    height: "23%",
  },
  contentText: {
    fontSize: 15,
  },
  shareBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "10%",
    flex: 1,
  },
  shareImg: {
    width: 25,
    height: 25,
    flex: 1,
  },
  shareText: {
    fontFamily: "NanumSquareRoundEB",
    fontSize: 15,
    flex: 4,
  }
});
