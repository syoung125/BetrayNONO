import React from "react";
import Logo from "../component/Logo";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Styles from "../styles/Styles";


export default function GameResult() {
  return (
    <View style={globalStyle.container}>
      <Logo/>
      <View style={styles.qcountContainer}>
        <Text style={styles.qCountText}>문제 9 / 15</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>나에게 능력이 생긴다면?</Text>
      </View>
      <View style={styles.optionContainer}>
        <OptionResult text={"하이하이"} percentage={"44"} pNum={"1111"} win={true}></OptionResult>
        <OptionResult text={"하이하이"} percentage={"44"} pNum={"1111"} win={true}></OptionResult>
      </View>
        
    </View>
  );
}

function OptionResult({text, percentage, pNum, win=false}) {
  return (
      <View style={styles_optionResult.container}>
          <Text>{text}</Text>
          <View>
            <Text>{percentage}%</Text>
            <Text>({pNum}명)</Text>
          </View>
      </View>
  );
}



const styles = StyleSheet.create({
  qcountContainer: {
    width: "25%",
    height: "5%",
    marginLeft: 12,
    backgroundColor: "#FF6A71",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    width: "1",
    height: "10%",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
    marginRight: 12,
    marginLeft: 12,
    padding: 24,
    backgroundColor: "#40688F",
  },
  qCountText: {
    color: "white",
    fontFamily: "NanumSquareRoundB",
  },
  questionText: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "NanumSquareRoundB",
  },
  optionContainer:{
    height: "30%",
    marginTop: 10,
    backgroundColor: 'blue',
    justifyContent: "center"
  }
})


const styles_optionResult = StyleSheet.create({
  container:{
    flex: 1,
    height: "35%",
    borderRadius: 7,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 12,
    marginLeft: 12,
    marginVertical: 5,
    padding: 24,
    backgroundColor: "white",
    flexDirection: "row"
  }
})