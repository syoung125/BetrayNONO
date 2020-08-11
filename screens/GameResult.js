import React from "react";
import Logo from "../component/Logo";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import color from "../assets/colors";
import SlidingUpPanel from 'rn-sliding-up-panel';
import Comment from '../component/Comment';

const {height} = Dimensions.get('window');

export default class GameResult extends React.Component {

  render(){
    return (
      <View style={globalStyle.container}>
        <Logo />
        <View style={styles.qcountContainer}>
          <Text style={styles.qCountText}>문제 9 / 15</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>나에게 능력이 생긴다면?</Text>
        </View>
        <View style={styles.optionContainer}>
          <OptionResult
            text={"매일 아침, 밤에\n머리가 감겨져 있는 능력"}
            percentage={"44"}
            pNum={"1111"}
            win={false}
          ></OptionResult>
          <OptionResult
            text={"식사 후에 항상\n양치질이 되어 있는 능력"}
            percentage={"56"}
            pNum={"2222"}
            win={true}
          ></OptionResult>
        </View>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: height / 1.27, bottom: 240}}
          animatedValue={this._draggedValue}
          showBackdrop={false}>
            <View style={styles.slidingPanel}>
              <View style={styles.bestCommentContainer}>
                <Comment nickname="user2" text="textttttttttttttttttttttttttttttttttttttt
                ttttttttttttttttttttttttttttt" date="2일 전" isBest="true" isOption1="false"/>
                <Comment nickname="user1" text="댓글그륵르ㅡ를ㄹ" date="1일 전" isBest="true"/>
              </View>
            </View>
        </SlidingUpPanel>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.nextBtn}>
            <Text style={styles.nextBtnText}>NEXT</Text>
          </View>
        </View>
      </View>
    );
  }
}

function OptionResult({ text, percentage, pNum, win = false }) {
  return (
      <View style={[styles_optionResult.container, {backgroundColor: win? color.lightRed: 'white'}]}>
          <View style={{flex: 3}}>
            <Text style={[styles_optionResult.optionText, {color: win? "white": "black"}]}>{text}</Text>
          </View>
          <View style={{justifyContent: "center", alignItems:"center", flex: 1}}>
            <Text style={[styles_optionResult.percentageText,
              {color: win? "white": color.lightRed}]}>
              {percentage}%
            </Text>
            <Text style={[styles_optionResult.pNumText,
              {color: win? "white": "#888888"}]}>
              ({pNum}명)
            </Text>
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
  optionContainer: {
    height: "30%",
    marginTop: 10,
    justifyContent: "center",
  },
  commentContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextBtn: {
    height: "30%",
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: color.yellow
  }, 
  nextBtnText: {
    fontFamily: "NanumSquareRoundB",
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: 5
  },
  slidingPanel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingTop: 35
  },
  bestCommentContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
  }
});

const styles_optionResult = StyleSheet.create({
  container: {
    flex: 1,
    height: "35%",
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "white",
    flexDirection: "row",
  },
  optionText: {
    fontSize: 18,
  },
  percentageText:{
    fontSize: 32
  },
});
