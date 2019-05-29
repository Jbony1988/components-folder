import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Alert, Text,} from 'react-native';


const Single = ({item}) => (
    <View>
        <Text>{item.url}</Text>
    </View>
);
    
const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        backgroundColor:'white',
        height: 40,
        borderRadius: 2,
        marginTop: 90,
      },
    buttonText: {
        color: '#649EBC',
        fontSize: 18,
        alignSelf: 'center',
    },
});

export default Single;