import React, { Component } from 'react';
import { View, Image,} from 'react-native';




export default class StarRating extends Component<Props> {
	render() {
		let value = this.props.value
		let widthVal = this.props.widthVal
		return (
			<View style={{ width: widthVal, height: widthVal, left: 0}}>
				<View style={{position: "absolute", left: 0, top: 0, bottom: 0, backgroundColor: 'orange', width: widthVal * value, height: widthVal}}>
					<Image style={{position: "absolute", left: 0, top: 0, bottom: 0, width: widthVal, height: widthVal }}
									source={require('../assets/inverse-star-grey.png')} />
				</View>
			</View>
		);
	}
}

