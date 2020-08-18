import React from "react";
import globalStyle from "../styles/Styles";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo from "../component/Logo";
import { cos } from "react-native-reanimated";
import NextBtn from "../component/NextBtn";

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:19000/";

export default class SignUp extends React.Component {
  state = {
    pageNum: 1,
    id: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    imgUrl: "",
    showNextBtn: false
  }

  checkIsFilled(){
    const {id, password, passwordCheck, showNextBtn} = this.state;
    console.log("cc id: "+id+", pw: "+password+", pwc: "+passwordCheck);
    // 값이 한 템포 늦게 바뀜 -> whyyyyy
    if(!showNextBtn && id.length > 0 
      && password.length > 0 && passwordCheck.length > 0 ){
        this.state.showNextBtn = true;
        console.log("안빔");
      }
  }

  pressNextBtn = () => {
    const {id, password, passwordCheck} = this.state;

    console.log("클릭");
    console.log("id: "+id+", pw: "+password+", pwc: "+passwordCheck);
    // 비어있지 않으면, 비번 같지 않은 경우 등
    if(id.length > 0 && password.length > 0 && passwordCheck.length > 0
      && (password == passwordCheck)){
      console.log("다음으로");
      this.setState({pageNum: 2});
      this.insertUser();
    }else{
      console.log("다 채워주세요")
    }
  }

  pressSignUpBtn = () => {
    const {id, password, nickname} = this.state;

    console.log("회원가입");

    // 비어있는지 체크, 닉네임 중복인지 체크
    // insertUser(id, password, nickname);

    this.props.navigation.navigate("GameStart");  // 홈으로
  }

  insertUser(id, password, nickname){
    //몽고디비 user에 insert
    console.log("id: "+id+", pw: "+password+", nickname: "+nickname);


    // MongoClient.connect(url, function(err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("bananadev");
    //   var user = { id: id, password: password, nickname: nickname };
    //   dbo.collection("user").insertOne(user, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    //   });
    // });
  }

  SignUpContent() {
    if (this.state.pageNum==1) {
      return (
        <View style={styles.contentsContainer}>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="아이디를 입력하세요"
              onChangeText={id => {
                this.setState({id});
                this.checkIsFilled();
              }}
            ></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호를 입력하세요"
              onChangeText={password => {
                this.setState({password});
                this.checkIsFilled();
              }}
            ></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="비밀번호를 한 번 더 입력하세요"
              onChangeText={passwordCheck => {
                this.setState({passwordCheck});
                this.checkIsFilled();
              }}
            ></TextInput>
          </View>
          <View style={styles.socialLoginContainer}>
            <Text style={styles.slTitle}>SNS 계정으로 회원가입</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#1ec800" }]}
              >
                <Text style={styles.btnText}>N</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#3b5998" }]}
              >
                <Text style={styles.btnText}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#ffe812" }]}
              >
                <Text
                  style={[styles.btnText, { color: "#020202", opacity: 0.6 }]}
                >
                  K
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialLoginBtn, { backgroundColor: "#e74c3c" }]}
              >
                <Text style={styles.btnText}>G</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.blankContainer}>
            { this.state.showNextBtn &&
              <NextBtn text="다음" onPress={this.pressNextBtn}></NextBtn>
            }
          </View>
        </View>
      );
    } else if (this.state.pageNum==2){
      return ( 
        <View style={styles.contentsContainer}>
          <View style={styles.formContainer}>
            <Text>프로필 사진 등록</Text>
            <View></View>
            <View style={styles.defaultProfileImagesContainer}></View>
            <TextInput
              style={styles.textInput}
              placeholder="사용하실 닉네임을 입력하세요"
              onChangeText={nickname => {
                this.setState({nickname});
                // 중복 체크
              }}
            ></TextInput>
          </View>
          <View style={styles.blankContainer}>
            { this.state.showNextBtn &&
              <NextBtn text="가입완료" onPress={this.pressSignUpBtn}></NextBtn>
            }
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={globalStyle.container}
        behavior="height"
        enabled
      >
        <StatusBar style="auto" />
        <Logo />
        <View style={globalStyle.bgWhiteContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>
              회원가입
            </Text>
          </View>
          {this.SignUpContent()}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    marginTop: 16,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingHorizontal: 48,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "200",
    fontFamily: "NanumSquareRoundR",
    opacity: 0.7,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 48,
  },
  contentsContainer: {
    flex: 4
  },
  formContainer: {
    marginHorizontal: 48,
    flex: 2
  },
  inputContainer: { flex: 3 },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#bdc3c7",
    paddingBottom: 8,
    paddingLeft: 4,
    marginBottom: 24,
    fontSize: 16,
  },
  socialLoginContainer: {
    flex: 2,
    alignItems: "center",
    paddingTop: 16,
    marginHorizontal: 48,
  },
  slTitle: { opacity: 0.5 },
  btnContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  socialLoginBtn: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020202",
    borderRadius: Dimensions.get("window").width / 2,
    borderRadius: Dimensions.get("window").height / 2,
  },
  btnText: { fontSize: 24, fontFamily: "NanumSquareRoundB", color: "#F2F2F2" },
  blankContainer: { flex: 1, justifyContent: 'flex-end' },
  defaultProfileImagesContainer: { flex: 1}
});
