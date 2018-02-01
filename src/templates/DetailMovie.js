import React from 'react';
import { View, Text, Image, TouchableNativeFeedback,Dimensions, Button, ScrollView  } from 'react-native';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import { infoBox } from '../templates/ItemList';
// import DateTimePicker from 'react-native-modal-datetime-picker';

const {width,height} = Dimensions.get('window');

export const DetailMovie = ({detail,item,onPress}) => (
    <View style={{flex:0.6,backgroundColor:'white'}}>
        <View style={{flex:0.2,flexDirection:'row'}}>
            <View style={{justifyContent:'center',margin:10}}>
                <FavoriteButtonContainer item={item}/>
            </View>
            <View>
                {infoBox(detail)}
            </View>
        </View>
        <View style={{flex:0.8,flexDirection:'row'}}>
            <View style={{flex:0.4}}>
                <Image 
                    source={{uri:'http://image.tmdb.org/t/p/w185'+detail.poster_path}} 
                    style={{height:height*0.25, margin:10}}
                />
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={{backgroundColor:'#6c5ce7',borderRadius:5, margin:10}}>
                        <Text style={{padding:5,color:'white',textAlign:'center'}}>REMINDER</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={{flex:0.6}}>
                <ScrollView>
                    <Text style={{ color: 'red' }}>Overview:</Text>
                    <Text style={{ color: 'black' }}>{item.overview}</Text>
                </ScrollView>
            </View>
        </View>
    </View>
);

