/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import New from './src/components/New.js';
import Next from './src/components/Next.js';
import Board from './src/components/Board.js';
import {Graph} from './src/components/Graph.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PanResponder
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const COLORS = ['number','blue','red'];

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
      super(props);
      this.onAnimationEndFunc = this.onAnimationEndFunc.bind(this);
      this.newGame = this.newGame.bind(this);
      this.count = 0;
      this.panResponder;
      this.state = {
          gestureName: 'none',
          graph: new Graph({updateState:this.onUpdateState.bind(this)}),
          colors: COLORS,
          next:this.randomNext(),
          displayOverlay:'none',
          score:0
      };
  };
  componentDidMount(){
    
  };
  onUpdateState(){
    this.setState({});
  };
  onSwipeUp(gestureState) {
    this.count = 0;
    this.state.graph.keyUp(this.state.next);
  };
 
  onSwipeDown(gestureState) {
    this.count = 0;
    this.state.graph.keyDown(this.state.next);
  }
 
  onSwipeLeft(gestureState) {
    this.count = 0;
    this.state.graph.keyLeft(this.state.next);
  }
 
  onSwipeRight(gestureState) {
    this.count = 0;
    this.state.graph.keyRight(this.state.next);
  }
  onAnimationEndFunc(){
    this.count++;
    if(this.count === this.state.graph.count){
        this.state.graph.count= 0;
        let endgame= this.state.graph.assignClone();
        let graph = this.state.graph;
        this.setState({
            graph:graph,
            next:this.randomNext(),
            displayOverlay: endgame,
            score:graph.score,
        });
    }
  };
  randomNext(){
    var index = 0;
    for(var i =1, max = COLORS.length;i<max;i++){
        if(Math.random()< 1/(i+1)){
            index = i;
        }
    }
    return index;
    
  };
  newGame(){
    this.state.graph.startGame();
    this.setState({});
    
  };
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <View>
      <GestureRecognizer
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        >
        <View style={styles.game}>
          <Next type={COLORS[this.state.next]}/>
          <New onPressFn={this.newGame}/>
          <Board grid={this.state.graph} colors={this.state.colors} onAnimationEndFunc={this.onAnimationEndFunc}/>
        </View>
      </GestureRecognizer>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  game: {
    marginTop:0,
    marginBottom:0,
    marginLeft:'auto',
    marginRight:'auto',
    maxWidth: 400,
    position: 'relative'
  },
  
});
