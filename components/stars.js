/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import StarRating from '../components/star-inverse';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Stars extends Component<Props> {
  render() {
    const ratingObj = {
        value: 4.25,
        widthVal: 20,
        //views: 300
    }
    let starlist = []
    for (let i = 0; i < 5; i++) {
      starlist.push(<StarRating value={Math.min(Math.max(ratingObj.value-i,0),1)} widthVal={ratingObj.widthVal}/>)
    }
    return (
      <View style={styles.container}>
        {starlist}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    marginTop: -30,
    marginLeft: 60,
    marginBottom: 20,  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
