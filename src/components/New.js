import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';

const New = ({onPressFn})=>{
    return (
        <TouchableOpacity style={styles.container} onPress={onPressFn}>
            <Text style={styles.new}>new game</Text>
        </TouchableOpacity>
    );
}

export default New;

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#d0e6df',
        shadowOffset:{width: 0,  height: 8},
        shadowColor: '#b6d9d9',
        shadowOpacity: 1.0,
        position: 'absolute',
        height: 40,
        left: -20,
        top: 10,
        width: 108,
        borderRadius: 10
    },
    new: {
        fontSize: 16,fontStyle: 'italic',lineHeight: 40,textAlign: 'center'
    }
 })