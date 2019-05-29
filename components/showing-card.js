import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

class ShowingCard extends React.Component {
    render() {
        const { date, day, time, logo, adress, confirmationLogo, confirmation, profile, name, } = this.props;
            return (     
                   <View style={styles.button}>
                        <View style={styles.buttonUp}>
                            <View style={styles.buttonUpLeft}>
                                <Text style={{height: 20}}>{date}</Text>
                                <Text style={{height: 70, fontSize: 60}}>{day}</Text>
                                <Text style={{height: 20}}>{time}</Text>
                            </View>
                            <View style={styles.buttonUpRight}>
                                <Image style={styles.imageS} source={logo} />
                                <Text style={styles.buttonAdress}>{adress}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonDown}>
                            <Image style={styles.imageG} source={confirmationLogo} />
                            <Text>{confirmation}</Text>
                            <Image style={styles.imageX} source={profile} />
                            <Text style={styles.buttonText}>{name}</Text>
                        </View>
                    </View>        

            )
    }
}
const styles = StyleSheet.create({
    button: {
        marginLeft: 10,
        marginTop: 100,
        backgroundColor: 'white',
        height: 180,
        width: 340,
        borderRadius: 20,
      },
      buttonUp: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: 'grey',
        height: 130,
        width: 340,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'center'
      },
      buttonUpLeft: { 
        alignItems: 'center', 
        height: 130,
        width: 110,
        borderTopLeftRadius: 20,
        justifyContent: 'center'
      },
      buttonUpRight: {
        alignItems: 'center',  
        borderWidth: 1,
        borderColor: 'grey',
        height: 130,
        width: 230,
        borderTopRightRadius: 20,
      },
      buttonDown: {
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 50,
        width: 340,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
      },
    
    imageS: {
        marginLeft: -33,
        paddingTop: 5,
        height: 35,
        width: '85%',
        resizeMode: 'stretch',
    },
    buttonAdress: {
        marginBottom: 4,
        marginRight: 20,
        paddingTop: 4,
        fontSize: 18,
        padding: 10,
        paddingTop: 20,
    },
    imageG: {
        borderRadius:10, 
    },
    imageX: {
        marginLeft: 20
    },
    buttonText: {
        marginLeft: 5
    }
});
export default  ShowingCard;
