import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ComponentStyles } from './css.js';

const Next = ({type}) => {
    return (
        <View style={styles.next}>
            <Text style={styles.title}>next</Text>
            <View elevation={3} style={[styles.tile,ComponentStyles[type]]}></View>
        </View>
    ) ;
}

export default Next;

const styles = StyleSheet.create({
    next:{
        borderRadius: 10,
        backgroundColor: '#d0e6df',
        left: -130,
        paddingTop: 5,
        paddingRight: 14,
        paddingBottom: 10,
        paddingLeft: 14,
        position:'absolute',
        top: 0,
    },
    title:{
        fontStyle: 'italic',
        fontWeight: '400',
        marginTop:0,
        marginRight:0,
        marginBottom:4,
        marginLeft: 2
    },
    tile:{
        width:28,
        height:38.5,
        borderRadius: 5,
    }
});