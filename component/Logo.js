import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import strings from "../assets/string";
import images from "../assets/images";

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>{strings.logo}</Text>
      <Image source={images.logo} style={styles.tinyLogo}></Image>
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
  },
  logoText: {
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
