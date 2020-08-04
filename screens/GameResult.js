import React from "react";
import Logo from "../component/Logo";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Styles from "../styles/Styles";
<<<<<<< HEAD
import { preventAutoHide } from "expo/build/launch/SplashScreen";
=======
import color from "../assets/colors"

>>>>>>> ba0ef591f2291fa5d2e514e96b721ca1a0c707f8

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
<<<<<<< HEAD
        <OptionResult
          text={"하이하이"}
          percentage={"44"}
          pNum={"1111"}
          win={true}
        ></OptionResult>
        <OptionResult
          text={"하이하이"}
          percentage={"44"}
          pNum={"1111"}
          win={true}
        ></OptionResult>
=======
        <OptionResult text={"매일 아침, 밤에\n머리가 감겨져 있는 능력"} percentage={"44"} pNum={"1111"} win={true}></OptionResult>
        <OptionResult text={"식사 후에 항상\n양치질이 되어 있는 능력"} percentage={"56"} pNum={"2222"} win={true}></OptionResult>
>>>>>>> ba0ef591f2291fa5d2e514e96b721ca1a0c707f8
      </View>
        
    </View>
  );
}

function OptionResult({text, percentage, pNum, win=false}) {
  return (
<<<<<<< HEAD
    <View style={styles_optionResult.container}>
      <Text>{text}</Text>
      <View>
        <Text>{percentage}%</Text>
        <Text>({pNum}명)</Text>
=======
      <View style={styles_optionResult.container}>
          <View style={{flex: 3}}>
            <Text style={styles_optionResult.optionText}>{text}</Text>
          </View>
          <View style={{justifyContent: "center", alignItems:"center", flex: 1}}>
            <Text style={styles_optionResult.percentageText}>{percentage}%</Text>
            <Text style={styles_optionResult.pNumText}>({pNum}명)</Text>
          </View>
>>>>>>> ba0ef591f2291fa5d2e514e96b721ca1a0c707f8
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
<<<<<<< HEAD
=======
    width: "1",
>>>>>>> ba0ef591f2291fa5d2e514e96b721ca1a0c707f8
    height: "10%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 8,
    marginHorizontal: 12,
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
<<<<<<< HEAD
  optionContainer: {
    height: "30%",
    marginTop: 10,
    backgroundColor: "blue",
    justifyContent: "center",
  },
});
=======
  optionContainer:{
    height: "30%",
    marginTop: 10,
    justifyContent: "center"
  }
})

>>>>>>> ba0ef591f2291fa5d2e514e96b721ca1a0c707f8

const styles_optionResult = StyleSheet.create({
  container:{
    flex: 1,
    height: "35%",
    borderRadius: 7,
    justifyContent: "space-between",
    alignItems: "center",
<<<<<<< HEAD
    marginRight: 12,
    marginLeft: 12,
    marginVertical: 5,
    padding: 24,
    backgroundColor: "white",
    flexDirection: "row",
  },
});
=======
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
>>>>>>> ba0ef591f2291fa5d2e514e96b721ca1a0c707f8
