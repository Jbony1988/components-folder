import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';


const styles = StyleSheet.create({
  rightContainer1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  leftContainer1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rightContainer: {
    flex: 0.3,
    padding: 5,
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    borderColor: '#CCCCCC',
    borderLeftWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
});

class RequestAssist extends PureComponent {
  render() {
    const {
      day, date, time, address, state, icon, requestType, status, profilePic, name,
    } = this.props;

    const greenDot = { ...styles.circleShapeView, backgroundColor: '#7ED321' };
    const redDot = { ...styles.circleShapeView, backgroundColor: '#FF0000' };
    const orangedDot = { ...styles.circleShapeView, backgroundColor: '#F5A623' };

   

    let dotStyle = {};
    let offer = '';
    if (status === 0) { offer = 'Offer Submitted'; dotStyle = orangedDot; }
    if (status === 1) { offer = 'Offer Passed'; dotStyle = redDot; }
    if (status === 2) { offer = 'Offer Confirmed'; dotStyle = greenDot; }

    return (
      <View style={
        {
          backgroundColor: '#FFFFFF',
          borderColor: '#CCCCCC',
          //borderRadius: 7,
          borderWidth: 1,
          width: 290,
          height: 130,
          flexDirection: 'row',
          marginTop:160,
          marginLeft:30
        }
      }
      >
        <View style={{ marginTop: 0 }}>
          <View style={{
            flexDirection: 'row', backgroundColor: 'transparent', height: 195, width: 300, justifyContent: 'center',
          }}
          >
            <View style={styles.leftContainer}>
              <Text style={{ textAlign: 'left', fontSize: 16, color: '#575757' }}>day</Text>
              <Text style={{ textAlign: 'left', fontSize: 20, color: '#575757' }}>date</Text>
              <Text style={{ textAlign: 'left', fontSize: 12, color: '#575757' }}>time</Text>
            </View>
            <View style={styles.rightContainer}>
              <View style={{
                top: -5,
                left: -10,
                width: 180,
                height: 0,
                borderTopWidth: 30,
                borderRightWidth: 45,
                backgroundColor: 'transparent',
                borderTopColor: '#6DA3D3',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#6DA3D3',
                borderBottomRightRadius: 30,
                
              }}
              />
              <View style={{
                flexDirection: 'row', position: 'absolute', top: 5, left: 5, zIndex: 5,
              }}
              >
                
                <Text style={{
                  marginLeft: 8, textAlign: 'left', fontSize: 14, color: '#FFFFFF', fontWeight: '500',
                }}
                >
                  ...
                </Text>
              </View>
              <View>
                <Text
                  numberOfLines={1}
                  style={{ textAlign: 'left', fontSize: 16, color: '#575757' }}
                >
                  ...
                </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                
                <Text
                  numberOfLines={1}
                  style={{
                    marginLeft: 5, marginTop: 3, fontSize: 14, textAlign: 'left', color: '#575757',
                  }}
                >
                  Diana Olariu

                </Text>
              </View>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}

RequestAssist.defaultProps = {
};

RequestAssist.propTypes = {
};

export default RequestAssist;
