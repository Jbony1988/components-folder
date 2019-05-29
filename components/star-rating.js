import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const MAX_RATING = 5;

export default class StarRatingTwo extends Component<Props> {
    constructor() {
        super();
        this.state = {rating: 0}
    }
    changeRating (key) {
        if(this.state.rating === key-0.5){
            this.setState({rating: key});
        }else{
            this.setState({rating: key-0.5});
        }
    }
    
	render() {
        
        let stars= [];
        for ( var i = 1; i <= MAX_RATING; i++) {
            stars.push(
              <TouchableOpacity key={i} onPress = { this.changeRating.bind( this, i )}>
                <Image style={styles.image} source = {( i <= this.state.rating ) ? ( require('../assets/star-filled-grey.png') ) : ( i === (this.state.rating + 0.5) ) ? ( require( '../assets/half-star-grey.jpg' ) ) : require('../assets/star-unfilled-grey.png')} />
              </TouchableOpacity>  
            ); 
        }


		return (
            <View style={ styles.container }>
                {stars}
            </View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: "#f5f5f5",
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
		
    },
    image: {
        width: 25,
        height: 25
       }
});