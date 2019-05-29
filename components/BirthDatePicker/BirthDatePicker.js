import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

let getDay = moment();
let calendarDate = moment()
  .subtract(21, 'years')
  .format('YYYY-MM-DD');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleStyle: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 15,
  },
  subtitle: {
    // color: colors.yellow,
    marginBottom: 15,
    fontSize: 20,
  },
});
export default class BirthDatePicker extends Component {
  static options = () => ({ topBar: { visible: false, height: 0 } });

  constructor(props) {
    super(props);
    this.state = {
      date: getDay,
      onClosed: false,
    };
  }

  render() {
    const { date, onClosed } = this.state;
    // eslint-disable-next-line no-console
    console.log(date);
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Select Date Of Birth</Text>
        <Text style={styles.subtitle}>You must be 21 years old to purchase</Text>

        <DatePicker
          style={{ width: 200 }}
          date={date}
          mode="date"
          hideText={false}
          minDate="1919-01-01"
          maxDate={calendarDate}
          placeholder="select date"
          format="YYYY-MM-DD"
          androidMode="spinner"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            dateText: {
              color: '#ffffff',
              fontSize: 15,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />
        <TouchableOpacity
          onPress={onClosed}
          style={{
            right: 20,
            top: 20,
            position: 'absolute',
          }}
        >
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
              }}
            >
              X
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
