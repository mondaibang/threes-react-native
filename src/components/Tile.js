import React from 'react';
import {Text,View, Animated,StyleSheet} from 'react-native';
import { ComponentStyles } from './css.js';
import { Interpolate } from './interpolate.js';

const Tile = ({id,color,value,move,onAnimationEndFunc}) => {
    let  pStyle,animated;
    
    if(move ==="none"){
        pStyle = {
            zIndex:10,
        };
        return (
            <View style={[styles.tile,pStyle,ComponentStyles[color],keyframes['index-'+id]]}>
                <Text style={[styles.text,styles[color]]}>{value}</Text>
            </View>
        );
    }else{
        animated = new Animated.Value(0);
        const position = {
            transform: [
                {
                  translateX: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [keyframes[move].from.left,keyframes[move].to.left]
                  })
                },
                {
                  translateY: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [keyframes[move].from.top,keyframes[move].to.top]
                  })
                }
            ],
            zIndex:100
        };
        Animated.timing(animated,{
            toValue: 1,
            duration: 100,
        }).start(onAnimationEndFunc);
        return (
            <Animated.View style={[styles.tile,position,ComponentStyles[color]]}>
                <Text style={[styles.text,styles[color]]}>{value}</Text>
            </Animated.View>
        );
        
    }
    
}

export default Tile;

const keyframes = Interpolate();
const styles = StyleSheet.create({
    tile: {
        height: 110,
        position: 'absolute',
        width: 80,
        zIndex: 1,
        borderRadius: 10,
    },
    text:{
        fontSize: 42,
        lineHeight: 110,
        textAlign: 'center',
    },
    red:{color:'#FFF'},
    blue:{color:'#FFF'},
    number:{color:'#000'}
});