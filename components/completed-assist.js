import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TextInput, Image } from 'react-native';
import Stars from '../components/stars';
import StarRatingTwo from '../components/star-rating';

type Props = {

};

export default class CompletedAssist extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = { text: 'Placeholder' };
    }
	render() {
		return (
			<View style={styles.container}>
                <View style= {styles.typePage}>
                    <Button
                        title="Cancel"
                        color= 'white'
                    />
                    <Text style={{color: 'white', textAlign: 'left', fontSize: 18, marginLeft: 50}}>Completed Assist</Text>
                </View>
                <View style = {{flexDirection: 'row'}}>
                <View style = {{ width: 70, height: 30, marginLeft: -10, marginTop: 10, borderBottomRightRadius:100, borderTopRightRadius: 100, backgroundColor: '#649EBC', }}>
                <Text style={{fontSize: 18 , color: 'white',paddingTop: 4, paddingLeft: 12, color: 'white'}}>$75</Text>
                </View>
                <View style = {{paddingLeft: 77, marginTop: 10,}}>
                    <Image 
                        source={require('../assets/blue-house.png')}
                        style={{width: 40, height: 40, marginLeft: 10 }}
                     />
                    <Text style = {{color: 'grey', fontSize: 18, }}>Showing</Text>
              </View>
              </View>
                <View>
                    <Text style={{marginTop: 10}}>Wednesday Oct.19 {'\n'}12.00PM {'\n'}{'\n'}1841 S. Calumet #602 </Text>
                </View>
                <View style= {{flexDirection: 'row', marginTop: 30, marginLeft: 10}}>
                    <Image source={require('../assets/user-profile@2.png')} />
                    <Text style={{marginLeft: 10}}>Joe Garcia {'\n'}<Text style={{color: 'grey'}}>Dream Town Realty{'\n'}</Text>{'\n'}</Text>
                </View>
                <Stars />
                <View>
                    <Text style = {{fontSize: 18, color: 'grey', marginTop: 10}}>Comments and Feedback</Text>
                    <Text style = {{marginTop: 5, fontSize: 14}}>Description kjlaskdhfdkaghkjdsgfhkjsdfhgkjfhbkjvbnkxjvnmxnjdksnfjksdfghkjsdfhgkjsdhgkjdvnckjdznvkjdfngkhdsfjkghsdjknvakndkghfkjhgrkjfvcvxzfsgjhfklegjhtkjfbsfdscad</Text>
                </View>
                <View>
                    <Text style = {{fontSize: 18, color: 'grey', marginTop: 10}}>Comments to Broker</Text>
                    <TextInput
                        style={{minHeight: 140, maxHeight: 200, backgroundColor: 'white', marginLeft: -10, marginRight: -10, padding: 5, fontSize: 14, marginTop: 5}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                        multiline='true'
                 />
                </View>
                <View>
                    <Text style = {{fontSize: 18, color: 'grey', marginTop: 10}}>Rate Broker</Text>
                    <StarRatingTwo />
                </View>
                <View style = {{backgroundColor: 'white', marginTop: 10, marginLeft: -10, marginRight: -10, height: 60, paddingTop: 10}}>
                <Button
                        title="Complete Payment"
                    />
                </View>
            
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "lightgrey",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
    },
    typePage: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#649EBC',
        height: 80,
        marginTop: -40,
        marginLeft: -10,
        marginRight: -10,
        paddingTop: 20

    },
    amount: {
        width: 60,
        height: 40,
        backgroundColor: 'blue',
        fontSize: 25,
        marginTop: 5,
        marginLeft: -10,
        paddingTop: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
});