import React from "react";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../component/Header";

export default function GamePage() {
  return (
    <View style={globalStyle.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.timeStatusContainer}>
          <Image
            style={styles.timerImage}
            source={require("../img/clock.png")}
          />
          <View style={styles.timeStatusBar}>
            <View style={styles.timeProgressBar}></View>
          </View>
        </View>
        <View style={styles.gameContainer}>
          <View style={styles.choiceContainer1}>
            <Text style={styles.choiceText}>바바바바나나나</Text>
          </View>
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          <View style={styles.choiceContainer2}>
            <Text style={styles.choiceText}>뱌나나아아</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 9,
  },
  timeStatusContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECF0F1",
    paddingHorizontal: 20,
  },
  timerImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  timeStatusBar: {
    height: 30,
    flex: 1,
    borderColor: "#3B3B3B",
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 2,
    marginHorizontal: 3,
  },
  timeProgressBar: {
    flex: 1,
    width: 300,
    backgroundColor: "#F06374",
  },
  gameContainer: {
    flex: 8,
  },
  choiceContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#9CDCFE",
    paddingLeft: 10,
  },
  choiceContainer2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#CE9178",
    paddingRight: 10,
  },
  choiceText: {
    color: "black",
    fontSize: 30,
    fontWeight: "400",
  },
  vsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  vsText: {
    color: "black",
    fontSize: 30,
    fontWeight: "400",
  },
});
