import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import strings from "../assets/string";
import images from "../assets/images";
// import fonts from "../assets/Fonts";

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image source={images.logo} style={styles.tinyLogo}></Image>
      <Text style={styles.logoText}>{strings.logo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 8,
    paddingBottom: 8,
    marginRight:10,
  },
  logoText: {
    // fontFamily: fonts.logo,
    fontSize: 24,
    fontFamily: "Capriola-Regular",
    color: "white",
  },
  tinyLogo: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});
