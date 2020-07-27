import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, Linking, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import colors from "../assets/colors";
import fonts from "../assets/fonts";
import images from "../assets/images";
import strings from "../assets/string";
import Logo from '../component/Logo';
import { LinearGradient } from "expo-linear-gradient";
import moveToBottom from '../library/utils/moveToBottom';

export default class GameStart extends React.Component{
    startGame(){
        Alert.alert('Simple Button pressed')
        // Linking.openURL('http://google.com')
    }

    goToLogin(){
        Alert.alert('Simple Button pressed')
        // NavigationService.navigate('Login', {
        //     screen: 'Login',
        //     info: 'information'
        // })
    }
    
    render(){
        return (
        <View style={styles.container}>
            {/* <LinearGradient colors={['#91eae4', '#86a8e7', '#7f7fd5']} 
                style={styles.gContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.5 }}> */}
                <StatusBar style="auto" />
                <Logo/>
                <View style={styles.mainContainer}>
                    <Text style={styles.title1}>{strings.gamestart.title1}</Text>
                    <Text style={styles.title2}>{strings.gamestart.title2}</Text>
                    <Image source={images.logo} style={styles.mainImage}></Image>
                    {moveToBottom(
                        <View>
                            <TouchableOpacity 
                                style={styles.btnStartBg}
                                onPress={this.startGame}>
                                <Text style={styles.btnStyle}>시작하기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.btnLoginBg}
                                onPress={this.goToLogin}>
                                <Text style={styles.btnStyle}>로그인</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            {/* </LinearGradient> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gContainer: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    title1: {
        fontFamily: fonts.title,
        fontSize: 30,
        marginTop: 50
    },
    title2: {
        fontFamily: fonts.text,
        fontSize: 20,
        marginTop: 10
    },
    mainImage: {
        width: 120,
        height: 120,
        marginTop: 70,
        marginBottom: 40
    },
    btnStartBg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 230,
        height: 50,
        borderRadius:10,
        backgroundColor: colors.btnDefault
    },
    btnLoginBg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 230,
        height: 50,
        borderRadius:10,
        backgroundColor: colors.btnLoginKakao,
        marginTop: 5
    },
    btnStyle: {
        color: 'white',
        fontSize: 20
    }
})