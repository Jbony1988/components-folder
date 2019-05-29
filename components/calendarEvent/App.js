/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import moment from 'moment';
import RNCalendarEvents from 'react-native-calendar-events';
import * as AddCalendarEvent from 'react-native-add-calendar-event';


const utcDateToString = (momentInUTC) => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    eventConfig: {
      title: 'Showing',
      startDate: utcDateToString('2019-04-15'),
      endDate: utcDateToString('2019-04-16'),
      notes: 'tasty!',
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
        titleColor: 'blue',
    }
  }
}
}

  addToCalendar = () => {  
    const { eventConfig } = this.state

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
  .then((eventInfo) => {
    // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
    // These are two different identifiers on iOS.
    // On Android, where they are both equal and represent the event id, also strings.
    // when { action: 'CANCELED' } is returned, the dialog was dismissed
    console.warn(JSON.stringify(eventInfo));
  })
  .catch((error) => {
    // handle error such as when user rejected permissions
    console.warn(error);
  });
};

  

  render() {
  
    return (
      <View style={styles.container}>
        <Button
       onPress={ this.addToCalendar }
          title='Add to calendar' />
      </View>
    );


  }
}

 

  






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
