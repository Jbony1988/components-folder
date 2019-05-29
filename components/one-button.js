import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

class OneButton extends React.Component {
    render() {
        const { text, image, buttonPress, index, style } = this.props;
            return ( 
                <TouchableOpacity onPress={() => buttonPress(index)} style={[styles.button, style]}>
                    <Image style={styles.icon} source={image} resizeMode='contain' />
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>        
            )
        }
    }

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        borderWidth: 1,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        paddingRight: 7,
      },
    icon: {
        position: 'absolute',
        maxWidth: 25,
        maxHeight: 25,
        marginLeft: 7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 39,
    },
});

export default  OneButton;
