import React, { version } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import color from '../assets/colors';
import images from '../assets/images';

export default function Comment({nickname, text, date, show=false, isOption1=true}) {

    return (
        <View style={{alignSelf: 'stretch', marginHorizontal: 20, marginVertical: 5}}>
            <View style={styles.Container, 
                {flexDirection: isOption1? 'row': 'row-reverse'}}>
                <Image source={images.logo} style={styles.profileImg}></Image>
                <View style={{flexDirection: "column",
                justifyContent: isOption1? 'flex-start': 'flex-end',
                width: '70%'}}>
                    <View style={styles.textContainer}>
                        <Text style={{flex: 1, marginBottom: 5, fontWeight: 'bold'}}>{nickname}</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.mainText}>{text}</Text>
                    </View>
                    { show && 
                        <View style={{justifyContent: isOption1? 'flex-start': 'flex-end'}, styles.infoContainer}>
                            <AddCountInfo imgSrc="" count="13"/>
                            <AddCountInfo imgSrc="" count="10"/>
                            <Text style={styles.infoText, styles.dateText}>{date}</Text>
                        </View>
                    }
                </View>
            </View>
        </View>
        
    );
}

function AddCountInfo({imgSrc, count}){
    return (
        <View style={{flexDirection: 'row', marginHorizontal: 5}}>
            <Image source={images.logo} style={styles.countImg}></Image>
            <Text style={styles.infoText}>{count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
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
        backgroundColor: color.ligthGray,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    mainText:{
        flexWrap: 'wrap',
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 4,
    },
    countImg: {
        width: 12,
        height: 12,
        marginHorizontal: 4
    },
    infoText: {
        fontSize: 13, 
        fontWeight: '400',
        lineHeight: 15
    },
    heartText: {

    },
    dateText: {
        color: '#494949',
    }
});
