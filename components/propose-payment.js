import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Image} from 'react-native'

export default class ProposedPayment extends Component {
  constructor(props) {
    super(props)
	this.state = { count: 40}
	
  }
  onPress = () => {
    this.setState({
      count: this.state.count+5
    })
  }
  onPressTwo = () => {
	this.setState({
		count: this.state.count-5
	  })
  }
  input2number = (input) => {
	input = input.toString().replace(/[^0-9]/g,'')
	if(input==""){
		input="0"
	}
  const parsed = parseInt(input , 10)
	this.setState({count: parsed})
  }
 render() {
   return (
     <View style={styles.container}>
	 	  <TouchableOpacity onPress={this.onPressTwo} style = {{borderBottomLeftRadius: 100, borderBottomRightRadius: 0, borderTopLeftRadius: 100, borderTopRightRadius: 0,  backgroundColor: 'white', borderRightWidth: 2, borderRightColor: '#F5F5F5'}} >
				<Text style={{fontSize: 32 , color: '#6DA3D3', textAligh: 'center', padding: 16, }}>-</Text>	
		  </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
			  <TextInput multiline = {true} keyboardType="numeric" style = {{fontSize: 28, color: '#6DA3D3', textAlign: 'center', minWidth: 140}} onChangeText={(count) => this.input2number(count)}
			 value={this.state.count}>{'$'+this.state.count+'\n'}
			 	<Text style={{fontSize: 12}}>Show Keypad</Text>
			  </TextInput>
      </TouchableOpacity>
	    <TouchableOpacity onPress={this.onPress} style = {{borderBottomLeftRadius: 0, borderBottomRightRadius:100, borderTopLeftRadius: 0, borderTopRightRadius: 100, backgroundColor: 'white', borderLeftWidth: 2, borderLeftColor: '#F5F5F5'}}>
		 	  <Text style={{fontSize: 32 , color: '#6DA3D3', textAligh: 'center', padding: 16}}>+</Text>	 
		  </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
	  paddingHorizontal: 10,
	  flexDirection: 'row',
	
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
})