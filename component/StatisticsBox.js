import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatisticsBox({title, percentage}) {
    return (
        <View style={styles.sBox}>
            <Text style={styles.sBoxTitle}>{title}</Text>
            <Text style={styles.sBoxPer}>{percentage}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sBox:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: 'gray',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    sBoxTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: '100'
    },
    sBoxPer: {
        color: 'white',
        fontSize: 30,
        fontWeight: '200'
    }
});