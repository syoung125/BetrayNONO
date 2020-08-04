import { StatusBar } from "expo-status-bar";
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
    <View style={styles.container}>
      {/* <Text style={styles.text}>Banana Dev</Text> */}
      <StatusBar style="auto" />
      <Logo />
      <View style={styles.mainContainer}>
        <View style={styles.timerContainer}>
          <View style={styles.timerColumnFirst}>
            <View style={styles.progressBar}>
              <Animated.View style={{ backgroundColor: "#8BED4F", width }} />
            </View>
          </View>
          <View style={styles.timerColumnSecond}>
            <Text style={styles.timerText}>{`${progress} seconds`}</Text>
          </View>
        </View>
      </View>
      <Button title="to review GameStart screen" onPress={pressHandler} />
    </View>
  );
};

export default GamePage2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: "auto",
    backgroundColor: "#59ADFF",
  },
  mainContainer: {
    flex: 1,
  },
  timerContainer: {
    flex: 0.1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    width: "80%",
  },
  timerText: {
    fontSize: 16,
    fontWeight: "500",
  },

  progressBar: {
    flexDirection: "row",
    height: 18,
    width: "70%",
    backgroundColor: "#f6f6f6",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 5,
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
  },
});
