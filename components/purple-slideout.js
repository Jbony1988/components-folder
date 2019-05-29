import React, { Component } from 'react';
import { StyleSheet,Text, ScrollView, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';



var { width } = Dimensions.get('window');

export default class PurpleSlideout extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            xValue: new Animated.Value(width),
        }
    }

    _move = (visible) => {
        Animated.timing(this.state.xValue, {
            toValue: visible ? width : 0,
            duration: 300,
            asing: Easing.linear,
        }).start(() => this.props.callback(visible));
       }

    myFunc(newState) {
        this._move(newState);
    }
    
    render() {
        const {text, confirm,} = this.props;
        return (
                <Animated.View style={[styles.container, {marginLeft: this.state.xValue}]} >
                    <TouchableOpacity style={styles.closeX}>  
                        <Text style={styles.textX}>X</Text>
                    </TouchableOpacity>
                    <ScrollView style={{backgroundColor: '#7a4696'}}>
                        <Text style={styles.pageText}>
                            {text}
                        </Text>    
                    </ScrollView>
                    <TouchableOpacity style={styles.confirm} onPress={confirm}>
                        <Text style={styles.textOk}>OK</Text> 
                    </TouchableOpacity>
                </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0, 
        bottom: 0,  
        right: 0,
        backgroundColor: '#7a4696',
    },
    textX: {
        paddingTop: 30,
        paddingLeft: 10,
        color: 'white',
        fontSize: 24,
    },
    pageText: {
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 35,
        paddingTop: 10,
        fontSize: 18,
        color: 'white',
    },
    confirm: {
        paddingBottom: 20,
        paddingTop: 10,
        alignItems: 'center',
    },
    textOk: {
        color: 'white',
        fontSize: 24,
        marginTop: 10,
        justifyContent: 'center',
    },
});

