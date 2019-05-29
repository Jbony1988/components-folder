import React, { Component } from 'react';
import {Text, View,} from 'react-native';
import axios from 'axios';

export default class ZipCodesApi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        //places: [{}],
        formatted_address: null
        }
    }
   
    componentDidMount() {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=60651&key=AIzaSyCJYZuEzGbd36ZL6eVENM9kb7Q4ZSdw-70')
        .then(response => {
        //   this.setState({ places: response.data})
            tmp = response.data.results[0].address_components.filter(
                (item) => {
                    return (item.types[0] == 'locality' || item.types[0] == 'administrative_area_level_1')
                }
            )
            tmp2 = response.data.results[0].formatted_address
            tmp3 = tmp2.search('60651')
            tmp4 = tmp2.slice(0,tmp3)+'60651'
            console.log(tmp3)
            this.setState({  formatted_address: tmp4, //places: tmp,
            })  
        })
        .catch(error => {
          console.log(error);
        });
     
    }
    // renderItem=(data)=>
    //     <Text>{data.long_name}</Text>
    
    render() {
        return (
            <View>
                <Text style={{color: 'white'}}>{this.state.formatted_address}</Text>
                {/* {   
                this.state.places.map((place) =>
                    {
                        //if(this.state.places[0].types == 'postal_code'){
                            return (
                              
                                <View >
                                    <Text style={{color: 'white'}}>{place.long_name}</Text>
                                </View> 
                            );
                        //}
                    }
                )
                } */}
            </View>    
        );
    }
}


