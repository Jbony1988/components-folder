import React, { Component } from 'react';
import { View,} from 'react-native';
import HashTag from '../components/hashtag';


export default class Create extends Component {
    constructor(props){
      super(props);
      this.state = { 
        tags: ['All', 'the love of my life', 'stuff', 'pie', 'things', 'babies',],
       };
    }

    render() {
        return(
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
              { this.state.tags.map((item) => ( <HashTag text={item} style={{ margin: 5, }} /> ))} 
            </View>
        )
    }
}
