import React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';

const CIRCLE_DIAMETER = 24;

class HashTag extends React.Component {

    render() {
        const { onClose, text } = this.props;
            return (
                <View style={[this.props.style, styles.wrap]}>
                    <Text style={styles.buttonText}>{`#${text}`}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.circle}>
                            <Text style={styles.buttonX}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
    }
}
const styles = StyleSheet.create({
    wrap: {
        backgroundColor: '#A9A9A9',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 3, 
        marginTop: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        paddingRight: 40, 
        marginLeft: 20,    
    },
    buttonX: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        margin: 'auto'
        
    },
    circle : {
        borderRadius: CIRCLE_DIAMETER/2,
        width: CIRCLE_DIAMETER,
        height: CIRCLE_DIAMETER,
        backgroundColor: '#A9A9A9',
        borderWidth: 2,
        borderColor: 'white',
      },
});

export default  HashTag;