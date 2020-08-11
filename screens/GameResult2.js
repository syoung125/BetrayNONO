import React from "react";
import Logo from "../component/Logo";
import globalStyle from "../styles/Styles";
import { StyleSheet, Text, View, ListView, FlatList } from "react-native";
import color from "../assets/colors";

//db에서가져올것
const data = [
  ['Aaa', 'Bbb'],
  ['Ccc', 'Ddd'],
  ['Aaa', 'Bbb'],
  ['Ccc', 'Ddd'],
  ['Aaa', 'Bbb'],
  ['Ccc', 'Ddd'],
  ['Aaa', 'Bbb'],
  ['Ccc', 'Ddd'],
];


export default function GameResult2() {
  return (
    <View style={globalStyle.container}>
      <Logo />
      <View style={styles.bgWhiteContainer}>
        <Text style={styles.title}>나의 선택</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={
            ({ item, index }) =>
              <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
                <Text style={styles.index}>{index}번 </Text>
                <Text style={styles.chosen}>{item[0]}</Text>
                <Text style={styles.notchosen}>{item[1]}</Text>
              </View>}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  bgWhiteContainer: {
    backgroundColor: "#f6f6f6",
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    paddingHorizontal: 48,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 32,

  },
  title: {
    marginTop: 50,
    fontSize: 20,
    color: 'grey',
    fontFamily: "NanumSquareRoundEB",
  },
  list: {
    backgroundColor: '#f6f6f6',
    paddingTop:20,
    justifyContent: 'center',

  },
  chosen: {
    textAlign: 'center',
    width: '34%',
    fontSize: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: '#ffe066',
    borderRadius: 10,
    backgroundColor: '#fffae6',

  },
  notchosen: {
    textAlign: 'center',
    width: '34%',
    fontSize: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 10,

    margin: 10,

  },
  index: {
    textAlign: 'center',
    margin: 30,
    color: 'grey',

  }
});
