import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView, StyleSheet} from 'react-native';
import OneButton from './one-button';


export default class EightButton extends Component {
    render() {
      
      let buttonlist = [];
      for (let i = 0; i < 8; i++) {
        buttonlist.push(<OneButton image={require('../assets/two.png')} text={"Showing"}/>)
      }
      return (
     
        <ScrollView horizontal={true} style={styles.framePage}>
          {buttonlist}
        </ScrollView>
      );
    }
  }

 const styles = StyleSheet.create({
    framePage: {
        flex: 1,
  	    paddingHorizontal: 10,
  	    flexDirection: 'row',
      },
  });