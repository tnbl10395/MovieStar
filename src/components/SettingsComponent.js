import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Slider } from 'react-native';
import HeaderComponentContainer from '../containers/HeaderComponentContainer';
import DateTimePicker from 'react-native-modal-datetime-picker';

class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        }
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (fulldate) => {
        var d = new Date(fulldate);
        var year = d.getFullYear();
        this.props.chooseYearRelease(year.toString());
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderComponentContainer navigation={this.props.navigation} name={'Settings'} />
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, backgroundColor: '#bdc3c7' }}>Filter</Text>
                <View style={{ flex: 0.7, marginLeft: 10 }}>
                    <TouchableOpacity
                        onPress={()=>this.props.changeTitles("Upcoming")}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#bdc3c7', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 7, paddingBottom: 7 }}>PopularMovies</Text>
                            {
                                this.props.checkPopular?
                                <Image source={require('../images/check.png')} style={{ position: 'absolute', right: 10, top: 6, tintColor: 'blue' }} />
                                :null
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.changeTitles("Now Playing")}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#bdc3c7', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 7, paddingBottom: 7 }}>Top Rated Movies</Text>
                            {
                                this.props.checkTopRated?
                                <Image source={require('../images/check.png')} style={{ position: 'absolute', right: 10, top: 6, tintColor: 'blue' }} />
                                :null
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.changeTitles("Top Rated")}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#bdc3c7', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 7, paddingBottom: 7 }}>Upcoming Movies</Text>
                            {
                                this.props.checkUpcoming?
                                <Image source={require('../images/check.png')} style={{ position: 'absolute', right: 10, top: 6, tintColor: 'blue' }} />
                                :null
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.changeTitles("Popular")}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#bdc3c7', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 7, paddingBottom: 7 }}>NowPlaying Movies</Text>
                            {
                                this.props.checkNowPlaying?
                                <Image source={require('../images/check.png')} style={{ position: 'absolute', right: 10, top: 6, tintColor: 'blue' }} />
                                :null
                            }
                        </View>
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#bdc3c7',paddingTop:5 }}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{ color: 'black', fontSize: 20}}>Movie with rate from: </Text>
                            <Text style={{ color: 'black', fontSize: 20, marginRight:10}}>{this.props.valueSlider}</Text>
                        </View>
                        <Slider
                            step={0.1}
                            minimumValue={0}
                            maximumValue={10}
                            style={{ padding: 10 }}
                            onValueChange={(text)=>this.props.changeSlider(text)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this._showDateTimePicker}>
                        <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 10 }}>From Release Year: </Text>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 10, marginRight:10 }}>{this.props.valueYearRelease}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, backgroundColor: '#bdc3c7' }}>Sort By</Text>
                <View style={{ flex: 0.2, backgroundColor: 'white',marginLeft:10 }}>
                    <TouchableOpacity
                        onPress={()=>this.props.selectSorting("ReleaseDate")}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#bdc3c7', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 20, paddingTop: 10, paddingBottom: 10 }}>Release Date</Text>
                            {
                                this.props.checkReleaseDate?
                                <Image source={require('../images/check.png')} style={{ position: 'absolute', right: 10, top: 6, tintColor: 'blue' }} />
                                :null
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.props.selectSorting("Rating")}>
                        <View style={{borderBottomWidth:1,borderBottomColor:'#bdc3c7',flexDirection:'row'}}>
                            <Text style={{color:'black',fontSize:20,paddingTop:10,paddingBottom:10}}>Rating</Text>
                            {
                                this.props.checkRating?
                                <Image source={require('../images/check.png')} style={{ position: 'absolute', right: 10, top: 6, tintColor: 'blue' }} />
                                :null
                            }
                        </View>                        
                    </TouchableOpacity>
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='date'
                    datePickerModeAndroid='spinner'
                />
            </View>
        );
    }
}
export default SettingsComponent;