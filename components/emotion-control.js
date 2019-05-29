import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity, Image, Text, ImageBackground } from 'react-native';




export default class EmotionControl extends Component {
  constructor(props) {
    super(props)
    const list = [
      {color_val: 'white',opacity_val: 0,},
      //{color_val: 'black',opacity_val: 0,},
      {color_val: 'blue',opacity_val: 1,},
      {color_val: 'red',opacity_val: 1,},
      {color_val: 'orange',opacity_val: 1,},
      {color_val: 'yellow',opacity_val: 1,},
      {color_val: 'green',opacity_val: 1,},
      {color_val: 'purple',opacity_val: 1,},
    ]
    this.state = { image: require('../assets/color-selector.png'),
                   list: list, index:0}
  }
  
  onPress = () => {
    this.setState({
      image: (this.state.index+1) % 7 == 0 ? require('../assets/color-selector.png') : require('../assets/color-wheel.png'),
      index: (this.state.index+1) % 7
    })
  }
    render() {
        return (
          <View>
          {/* <View style={{backgroundColor: this.state.list[this.state.index].color_val, flex: 1, opacity: this.state.list[this.state.index].opacity_val, height: 320, width: 320}}> */}
            <TouchableOpacity style={{margin: 0,}} onPress={ this.onPress } >
              <Image style={styles.image} source={this.state.image} />
              <View style={{height: 30, width: 30, borderRadius: 30, backgroundColor: this.state.list[this.state.index].color_val, opacity: this.state.list[this.state.index].opacity_val, top: 8, left: 7}}></View>
            </TouchableOpacity>
           </View>
        );
    }
}


const styles = StyleSheet.create({
  image: {
      maxWidth: 45,
      maxHeight: 45,
      position:'absolute'
  },
  });
  
 