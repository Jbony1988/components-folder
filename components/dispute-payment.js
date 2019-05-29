import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Alert, Text,} from 'react-native';


export default class DisputePayment extends Component {
    render() {
            return ( 
                <TouchableOpacity onPress={() => Alert.alert(text=`Dispute Payment \n `, `Please call our customer service toll free number for any disputes.1-800-311-2605`)} style={styles.button}>
                    <Text style={styles.buttonText}>Dispute Payment</Text>
                </TouchableOpacity>        
            )
        }
    }
    
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