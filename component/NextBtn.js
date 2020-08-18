import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import color from "../assets/colors";

export default function NextBtn({ text, onPress }) {
  return (
    <TouchableOpacity
        onPress={onPress}>
        <View style={styles.nextBtn}>
            <Text style={styles.nextBtnText}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    nextBtn: {
        paddingVertical: 10,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: color.yellow,
    }, 
    nextBtnText: {
        fontFamily: "NanumSquareRoundB",
        color: "white",
        fontSize: 30,
        fontWeight: "700",
        letterSpacing: 3,
    },
});
