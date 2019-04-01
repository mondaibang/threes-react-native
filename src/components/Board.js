import React from 'react';
import Tile from './Tile.js';
import {View, StyleSheet} from 'react-native';

const Board = ({grid, colors,onAnimationEndFunc}) => {
    
    

    
    return (
        <View style={styles.board}>
            <View style={styles.row}>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
            </View>
            <View style={styles.row}>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
            </View>
            <View style={styles.row}>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
            </View>
            <View style={styles.row}>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
                <View style={styles.tile_container}></View>
            </View>
            {
                Object.keys(grid.nodes).map((v)=>(
                      
                        <Tile key={v} color={colors[grid.nodes[v].color]} value={grid.nodes[v].value}  
                        move={grid.nodes[v].move} id={grid.nodes[v].id}  onAnimationEndFunc={onAnimationEndFunc} />
                ))
            }
        </View>
    );
}


export default Board;

const styles = StyleSheet.create({
    board:{
        borderRadius: 10,
        backgroundColor: '#d0e6df',
        overflow: 'hidden',
        top:90,
        left:-200,
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:16,
        paddingRight:16,
        position:'absolute',
    },
    
    row : {
        overflow: 'hidden',
        flexDirection:"row",
    },
    
    tile_container: {
        borderRadius: 10,
        backgroundColor: '#b6d9d9',
        shadowOffset:{width: 0,  height: 8},
        shadowColor: '#b6d9d9',
        shadowOpacity: 1.0,
        height: 110,
        width: 80,
        marginTop:10,
        marginBottom:10,
        marginLeft:6,
        marginRight:6,
    }
});