import React from "react";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import StatisticsBox from "../component/StatisticsBox";

export default function GameResult() {
  return (
    <View style={globalStyle.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <View style={styles.statisticsContainer}>
          <StatisticsBox title={"이거이거이거"} percentage={"30"} />
          <Text style={styles.vsText}>VS</Text>
          <StatisticsBox title={"저거저거저거"} percentage={"70"} />
        </View>
        <View style={styles.statisticsContainerBottom}>
          <Text>좋아요</Text>
          <Text>내 통계</Text>
          <Text>공유하기</Text>
        </View>
        <View style={styles.commentsContainer}>
          <Text>Best</Text>
          {/* <Comment
            nickname={"user1"}
            text={"당연히 저거저거저거지~"}
            date={"10분 전"}
          />
          <Comment nickname={"user2"} text={"노노~"} date={"15분 전"} />
          <Comment nickname={"user3"} text={"야야야"} date={"1시간 전"} /> */}
          <Text>댓글 더보기</Text>
        </View>
        <View style={styles.nextBtn}>
          <Text style={styles.nextText}>NEXT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 9,
  },
  statisticsContainer: {
    flex: 2,
    backgroundColor: "#ECF0F1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  statisticsContainerBottom: {
    flex: 1,
    backgroundColor: "#ECF0F1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  vsText: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  commentsContainer: {
    flex: 3,
    backgroundColor: "white",
  },
  nextBtn: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  nextText: {
    color: "white",
    fontSize: 30,
    fontWeight: "400",
  },
});
