import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Image, Text,View, Linking, ScrollView} from 'react-native';
import ZipCodesApi from '../components/zip-codes-api';


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        height:150,
        margin: 1
    },
    containerLeft: {
        flex:0.75,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#01ab91',
        paddingLeft: 10,
    },
    containerRight: {
        flex: 0.25,
        flexDirection: 'column',
        padding: 0,
        marginLeft: 0,
    },
    containerName: {
        flex:0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#01ab91'
    },
    containerDate: {
        flex:0.50,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: '#01ab91'
    },
    containerLink: {
        flex:0.25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#01ab91',
    }, 
    containerFeatured: {
        flex:0.5,
        marginLeft: 2,
        marginBottom: 1,
        backgroundColor: '#ffba15',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: 17,
        paddingRight: 17,
    },
    containerEvent: {
        flex: 0.5,
        marginLeft: 2,
        marginTop: 1,
        backgroundColor: '#ffba15',
        alignItems: 'center',
        justifyContent: 'space-evenly',  
    },  
  });


export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {image: require('../assets/book.jpg')}
    };

    onPress = () => {
        this.setState({
            image: require('../assets/done.jpg')
        })
    }
    render() {
        const {name} = this.props;
        return (   
                <View style={styles.container}>
                    <View style={styles.containerLeft}>
                        <View style={styles.containerName}>
                            <Text style={{color: 'white', fontSize: 18,}}>{name}</Text>
                            <TouchableOpacity onPress={ this.onPress }>
                                <Image style={{ width: 30, height: 30,}}  source={this.state.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.containerDate}>
                            {/* <Text style={{color: 'white'}}>Heidelberg, PA 15106 </Text> */}
                            <ZipCodesApi />
                            <Text style={{color: 'white'}}>Monday, December 10th - 7.30 PM</Text>
                        </View>
                        <View style={styles.containerLink}>
                            <TouchableOpacity>
                                <Text style={{color: 'white', textDecorationLine:'underline'}}
                                    onPress={() => Linking.openURL('http://google.com')}>
                                    Invited: RSVP'd: 9 Outside Orders: 0
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerRight}>
                        <ScrollView horizontal={true} style={{ flex: 1}}>
                            <View style={{ flex: 1, flexDirection: 'column',}}>
                                <TouchableOpacity style={styles.containerFeatured}>
                                    <Image style={{ width: 30, height: 30, }} source={require('../assets/white-star.psd')} />
                                    <Text style={{color: 'white', fontSize: 10}}>FEATURED</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerEvent}>
                                    <Image style={{ width: 30, height: 30,}}  source={require('../assets/white-star.psd')} />
                                    <Text style={{color: 'white', fontSize: 10}}>MANAGE {`\n`} EVENT</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>   
        )
    }
}
    
