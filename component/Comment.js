import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Comment({nickname, text, date}) {
    return (
        <View style={styles.Container}>
            <Text>{nickname}</Text>
            <Text>{text}</Text>
            <Text>{date}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    Container:{
        display: "flex",
        flexDirection: 'row'
    }
});