import React, { version } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import color from '../assets/colors';
import images from '../assets/images';

export default function Comment({nickname, text, date, isBest=false, isOption1=true}) {

    return (
        <View style={{alignItems: isOption1? "flex-left": "flex-right", width: "100%"}}>
            <View style={styles.Container}>
                <Image source={images.logo} style={styles.profileImg}></Image>
                <View style={{flex:1, flexDirection: "column"}}>
                    <View style={styles.textContainer}>
                        <Text style={{marginBottom: 5, fontWeight: 'bold'}}>{nickname}</Text>
                        <Text style={styles.mainText}>{text}</Text>
                    </View>
                    <View style={styles.infoContainer, {color: isBest? 'black': 'blue'}}>
                        <AddCountInfo imgSrc="" count="13"/>
                        <AddCountInfo imgSrc="" count="10"/>
                        <Text>{date}</Text>
                    </View>
                </View>
            </View>
        </View>
        
    );
}

function AddCountInfo({imgSrc, count}){
    return (
        <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <Image source={images.logo} style={styles.countImg}></Image>
            <Text>{count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%" , 
        flex: 1,
        marginHorizontal: 15,
        marginBottom: 10
    },
    profileImg: {
        width: 24,
        height: 24,
        marginHorizontal: 8,
    },
    commentContainer: {
        flex: 1
    },
    textContainer: {
        flex: 1,
        backgroundColor: color.ligthGray,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    mainText:{
        flexWrap: 'wrap',
    },
    infoContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent: 'flex-end',
        backgroundColor: color.lightRed
    },
    countImg: {
        width: 12,
        height: 12,
        marginHorizontal: 4,
        marginTop: 4
    },
});