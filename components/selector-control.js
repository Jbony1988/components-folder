import React, { Component } from 'react';
import { TouchableOpacity,View } from 'react-native';
//import EmotionControl from './components/emotion-control';


class SelectorControl extends React.Component {
    constructor() {
        super();
        this.state = {
            currentSelection: 'blue',
        };
    }

    touched(color) {
        this.setState({ currentSelection: color, });
    }

    render() {
       const { currentSelection } = this.state;
        return (
            <View>                    
                <TouchableOpacity onPress={() => this.touched('blue')} >
                 <EmotionControl 
                  showColorDot={currentSelection === 'blue'}
                  color={currentSelection}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.touched('purple')} >
                <EmotionControl
                  showColorDot={currentSelection === 'purple'}
                  color={currentSelection}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.touched('red')} >
                <EmotionControl 
                  showColorDot={currentSelection === 'red'}
                  color={currentSelection}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.touched('orange')} >
                <EmotionControl 
                  showColorDot={currentSelection === 'orange'}
                  color={currentSelection}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.touched('yellow')} >
                <EmotionControl 
                  showColorDot={currentSelection === 'yellow'}
                  color={currentSelection}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.touched('green')}>
                <EmotionControl 
                  showColorDot={currentSelection === 'green'}
                  color={currentSelection}  />
                </TouchableOpacity>
              </View>
        );
    }
}

export default SelectorControl;