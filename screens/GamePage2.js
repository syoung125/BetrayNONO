import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles/Styles";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
import Logo from "../component/Logo";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const GamePage2 = ({ navigation }) => {
  let animation = useRef(new Animated.Value(0));

  const [progress, setProgress] = useState(0);
  useInterval(() => {
    if (progress < 15) {
      setProgress(progress + 1);
    }
    if (progress >= 15) {
      setProgress(0);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 15],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.push("GameResult");
  };

  return (
    <View style={globalStyle.container}>
      <StatusBar style="auto" />
      {/* <Text style={styles.text}>Banana Dev</Text> */}
      <Logo />
      <View style={styles.mainContainer}>
        <View style={styles.qcountContainer}>
          <Text style={styles.qCountText}>문제 9 / 15</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.qCountText}>나에게 능력이 생긴다면?</Text>
        </View>
        <View style={styles.choiceContainer_Left}>
          <Text>매일 아침, 밤에{"\n"}머리가 감겨져 있는 능력</Text>
        </View>
        <View style={styles.VSContainer}>
          <Text style={styles.VSText}>VS</Text>
        </View>
        <View style={styles.alignContainer}>
          <View style={styles.choiceContainer_Right}>
            <Text>식사 후에 항상{"\n"}양치질이 되어 있는 능력</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.timerContainer}>
            <View style={styles.timerColumnFirst}>
              <View style={styles.progressBar}>
                <Animated.View style={{ backgroundColor: "#8BED4F", width }} />
              </View>
            </View>
            <View style={styles.timerColumnSecond}>
              <Text style={styles.timerText}>{`${progress}초`}</Text>
            </View>
          </View>
        </View>
      </View>
      <Button title="to review GameStart screen" onPress={pressHandler} />
    </View>
  );
};

export default GamePage2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  qcountContainer: {
    width: "30%",
    height: "8%",
    marginLeft: 10,
    backgroundColor: "#FF6A71",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: {
    width: "95%",
    height: "10%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 9,
    marginRight: 9,
    backgroundColor: "#40688F",
  },
  timerContainer: {
    flex: 0.1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  alignContainer: {
    height: "29%",
    alignItems: "flex-end",
  },
  VSContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  choiceContainer_Left: {
    width: "70%",
    height: "29%",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    marginLeft: -15,
    backgroundColor: "#F6FAFE",
    justifyContent: "center",
    alignItems: "center",
  },
  choiceContainer_Right: {
    width: "70%",
    height: "100%",
    borderRadius: 15,
    marginRight: -15,
    backgroundColor: "#F6FAFE",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  timerColumnFirst: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  timerColumnSecond: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 10,
    width: "80%",
  },
  timerText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "NanumSquareRoundB",
  },
  qCountText: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    justifyContent: "center",
    fontFamily: "NanumSquareRoundB",
  },
  VSText: {
    fontFamily: "NanumSquareRoundEB",
    fontSize: 30,
    color: "#FF4246",
  },
  progressBar: {
    flexDirection: "row",
    height: 18,
    width: "80%",
    backgroundColor: "#f6f6f6",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 5,
    paddingTop: 10,
  },
  progressBarAnimation: {
    backgroundColor: "#8BED4F",
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    flex: 0.1,
    fontSize: 24,
    fontFamily: "NanumSquareRoundB",
  },
});
