import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

class BrokerCard extends React.Component {
    render() {
        const {logo, profile, date, day, time, camera, typeRequest, brokerName, location, amount } = this.props;
            return (     
                   <View style={styles.button}>
                        <Image style= {{position: 'absolute'}} source={logo} />
                        <View style={styles.buttonLeft}>
                            <Image source={profile} />
                            <View style={{padding: 17, }}>
                                <Text style={[styles.buttonText, style={height: 17, marginBottom: -5, paddingLeft: 14}]}>{date}</Text>
                                <Text style={[styles.buttonText, style={height: 45, fontSize: 35, paddingLeft: 10}]}>{day}</Text>
                                <Text style={[styles.buttonText, style={height: 15}]}>{time}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonRight}>
                            <View style={styles.buttonRightUp}>
                                <Image style={styles.imageC} source={camera} /> 
                                <Text style={styles.typeR}>{typeRequest}</Text>
                            </View>
                            <View>
                                <Text style={{color:'grey', fontSize: 11, paddingTop: 5}}>BROKER</Text>
                                <Text>{brokerName}</Text>
                                <Text style={{color:'grey', fontSize: 11, paddingTop:10}}>LOCATION</Text>
                                <Text>{location}</Text>
                                <Text style={{fontSize: 18, color: '#649EBC', paddingTop: 30, paddingLeft: 140}}>{amount}</Text>
                            </View>
                        </View>
                    </View>        
            )
    }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 100,
        marginLeft: 10,
        backgroundColor: 'white',
        height: 180,
        width: 280,
        borderRadius: 5,
        flexDirection: 'row',
      },
      buttonLeft: { 
        alignItems: 'center', 
        height: 180,
        width: 100,
        justifyContent: 'center',
        paddingTop: 30,
        marginLeft: -7,
        
      },
      buttonRight: {
        height: 180,
        width: 180,
      },
      buttonRightUp: {
        height: 50,
        width: 180,
        flexDirection:'row' 
      },
    imageC: {
        marginTop: 10,
        alignItems: 'flex-start',
    },
    typeR: {
        marginTop: 15,
        alignItems: 'center',
        color: 'white',
        fontSize: 12
    },
    buttonRightDown: {
        height: 130,
        width: 180,
    },
    buttonText: {
        color: 'grey',
    }

});
export default  BrokerCard;