import React from "react";
import Logo from "../component/Logo";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Styles from "../styles/Styles";
import color from "../assets/colors"


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
        <OptionResult text={"매일 아침, 밤에\n머리가 감겨져 있는 능력"} percentage={"44"} pNum={"1111"} win={true}></OptionResult>
        <OptionResult text={"식사 후에 항상\n양치질이 되어 있는 능력"} percentage={"56"} pNum={"2222"} win={true}></OptionResult>
      </View>
        
    </View>
  );
}

function OptionResult({text, percentage, pNum, win=false}) {
  return (
      <View style={styles_optionResult.container}>
          <View style={{flex: 3}}>
            <Text style={styles_optionResult.optionText}>{text}</Text>
          </View>
          <View style={{justifyContent: "center", alignItems:"center", flex: 1}}>
            <Text style={styles_optionResult.percentageText}>{percentage}%</Text>
            <Text style={styles_optionResult.pNumText}>({pNum}명)</Text>
          </View>
      </View>
  );
}



const styles = StyleSheet.create({
  qcountContainer: {
    width: "25%",
    height: "5%",
    marginLeft: 12,
    backgroundColor: color.lightRed,
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
    marginHorizontal: 12,
    marginVertical: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
  },
  optionText:{
    fontSize: 18,
  },
  percentageText:{
    fontSize: 36
  },
  pNumText:{
    fontSize: 12
  }
})