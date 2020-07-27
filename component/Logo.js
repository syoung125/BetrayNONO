import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import strings from "../assets/string"
import images from '../assets/images';
import fonts from '../assets/fonts';

export default function Logo() {
    return (
        <View style = {styles.logoContainer}>
            <Image source={images.logo} style={styles.tinyLogo}></Image>
            <Text style = {styles.logoText}>{strings.logo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginRight: 15
    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginHorizontal: 5
    },
    logoText: {
        fontFamily: fonts.logo,
        fontSize: 20
    }
});