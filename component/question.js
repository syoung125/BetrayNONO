import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Question({title}) {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.qCountText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    questionContainer: {
        width: "95%",
        height: "10%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 9,
        marginRight: 9,
        backgroundColor: "#40688F"
    },
    qCountText: {
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        justifyContent: "center",
        fontFamily: "NanumSquareRoundB"
    }
})