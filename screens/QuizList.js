import React from "react";
import globalStyle from "../styles/Styles";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import Logo from "../component/Logo";
import images from "../assets/images";

export default class QuizList extends React.Component {
  render() {
    return (
      <View style={globalStyle.container}>
        <StatusBar style="auto" />
        <Logo />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>내가 푼 퀴즈 목록</Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.quizContainer}>
            <View style={styles.quizColumnHeader}>
              <Text style={styles.quizDate}>2020.08.04</Text>
            </View>
            <View style={styles.quizColumnMain}>
              <View style={styles.quizTitleColumn}>
                <Text style={styles.quizTitle}>밸런스 게임</Text>
              </View>
              <View style={styles.quizGameColumn}>
                <Text style={styles.quizGameTitle}>
                  당신의 성향은 어쩌구 저쩌구~~
                </Text>
                <Image source={images.monkey} style={styles.quizImage}></Image>
              </View>
            </View>
            <View style={styles.quizColumnMain}>
              <View style={styles.quizTitleColumn}>
                <Text style={styles.quizTitle}>밸런스 게임</Text>
              </View>
              <View style={styles.quizGameColumn}>
                <Text style={styles.quizGameTitle}>
                  당신의 성향은 얼씨구 절씨구~~
                </Text>
                <Image source={images.monkey} style={styles.quizImage}></Image>
              </View>
            </View>
          </View>
          <View style={styles.quizContainer}>
            <View style={styles.quizColumnHeader}>
              <Text style={styles.quizDate}>2020.08.06</Text>
            </View>
            <View style={styles.quizColumnMain}>
              <View style={styles.quizTitleColumn}>
                <Text style={styles.quizTitle}>밸런스 게임</Text>
              </View>
              <View style={styles.quizGameColumn}>
                <Text style={styles.quizGameTitle}>
                  당신의 성향은 이러쿵 저러쿵~~
                </Text>
                <Image source={images.monkey} style={styles.quizImage}></Image>
              </View>
            </View>
          </View>
          <View style={styles.quizContainer}>
            <View style={styles.quizColumnHeader}>
              <Text style={styles.quizDate}>2020.08.10</Text>
            </View>
            <View style={styles.quizColumnMain}>
              <View style={styles.quizTitleColumn}>
                <Text style={styles.quizTitle}>밸런스 게임</Text>
              </View>
              <View style={styles.quizGameColumn}>
                <Text style={styles.quizGameTitle}>
                  당신의 성향은 저쩌구 어쩌구~~
                </Text>
                <Image source={images.monkey} style={styles.quizImage}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    letterSpacing: 1,
  },
  mainContainer: {
    flex: 8,
    paddingHorizontal: 16,
  },
  quizContainer: {
    marginBottom: 16,
  },
  quizColumnHeader: {
    paddingBottom: 8,
  },
  quizDate: {
    color: "white",
    fontSize: 12,
  },
  quizColumnMain: {
    paddingHorizontal: 18,
    backgroundColor: "white",
    borderRadius: 6,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  quizTitleColumn: {
    paddingTop: 16,
    paddingBottom: 12,
  },
  quizTitle: {
    color: "#2660FF",
    fontFamily: "NanumSquareRoundB",
  },
  quizGameColumn: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  quizGameTitle: {
    fontSize: 18,
    opacity: 0.6,
    marginRight: 16,
  },
  quizImage: {
    width: 48,
    height: 48,
  },
});
