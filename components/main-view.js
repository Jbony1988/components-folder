import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity, Image, Text, ImageBackground, Picker, ScrollView, FlatList } from 'react-native';
import EmotionControl from '../components/emotion-control';
import RNPickerSelect from 'react-native-picker-select';
import Create from '../components/component';

const categ = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'This Month',
      value: 'This Month',
    },
    {
      label: 'This Week',
      value: 'This Week',
    },
  ];

export default class MainView extends Component {
    render() {
        const placeholder = {
            label: "All",
            value: null,
          };
        return (
            <ImageBackground style={styles.container} source={require('../assets/orange.jpg')}>
                <View style={{flexDirection:'row', marginTop: 40, marginRight: 15, justifyContent: 'space-between', alignContent: 'center', paddingHorizontal: 10, }}>
                    <Image style = {{ width: 60, height: 60,}} source={require('../assets/grafic.png')} resizeMode='contain'/>
                    <RNPickerSelect
                        placeholder={placeholder}
                        placeholderTextColor='white'
                        items={categ}
                        onValueChange={value => {
                            this.setState({
                                newCateg: value,
                            });
                        }}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: {
                                top: 25,
                                right: 5, 
                            },
                            placeholder: {
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                paddingRight: 50
                            },
                            }}
                        Icon={() => {
                            return (
                                <View
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderTopWidth: 10,
                                        borderTopColor: 'white',
                                        borderRightWidth: 10,
                                        borderRightColor: 'transparent',
                                        borderLeftWidth: 10,
                                        borderLeftColor: 'transparent',
                                        width: 0,
                                        height: 20,
                                    }}
                                />
                            );
                        }}
                    />
                    <EmotionControl/>
                </View>
                {/* <Create /> */}
                {/* <View>
                    <Image 
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                </View> */}
                <FlatList
                    data={[
                        { key: 'Family always makes me feel energized', image:require('../assets/family.jpg'), colorFeel: require('../assets/orange.jpg')},
                        { key: 'So much to be grafetul for today', colorFeel: require('../assets/yellow.jpg')},
                        { key: 'c c c c c c c c c c c ccc c c c c c c c c ', image:require('../assets/family.jpg'), colorFeel: require('../assets/blue.jpg')},
                        { key: 'd', image:require('../assets/family.jpg'), colorFeel: require('../assets/green.jpg')},
                        { key: 'e', image:require('../assets/family.jpg')}, 
                        { key: 'f',}, //image:require('../assets/family.jpg')},
                        { key: 'g', image:require('../assets/family.jpg')},
                        { key: 'h', image:require('../assets/family.jpg')},
                        { key: 'i', image:require('../assets/family.jpg')},
                        { key: 'j', image:require('../assets/family.jpg')},
                        { key: 'k', image:require('../assets/family.jpg')}
                    ]}
                    renderItem={({item}) => (
                        <ImageBackground style = {{flexDirection:'row',}} source={item.colorFeel}>
                            <View style = {{flexDirection:'row', padding: 5}}>
                                <Image 
                                    style={{width: 180, height: 180,}}
                                    resizeMode='contain'
                                    source={item.image}/>
                                <View style={{ justifyContent:'center', alignItems: 'center', width: 190,}}>   
                                    <Text style={{color: 'white',fontSize:20, padding: 15}}>{item.key}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        
                        )}
                />
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        //paddingHorizontal: 10,
    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingVertical: 17,
      paddingHorizontal: 10,
      color: 'white',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      color: 'white',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  }); 