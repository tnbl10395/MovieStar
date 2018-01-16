import React from 'react';
import { View, Image, Text, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

export const ItemReminder = () => (
    <Swipeout 
        {...swipeSettings}
        style={{backgroundColor:'white'}}>
        <View style={{flexDirection:'row',borderWidth:1}}>
            <Image
                source={{uri:'http://image.phimmoi.net/film/2620/poster.medium.jpg'}}
                style={{height:150,margin:5,flex:0.3}}
            />
            <View style={{justifyContent:'space-around',flex:0.7,marginLeft:2}}>
                <Text style={{fontSize:24,color:'black'}}>Pokemon: Giratina & The sky warrior</Text>
                <Text style={{fontSize:24,color:'black'}}>2017-09-02 10:06</Text>
            </View>
            <View>
                <Image
                    source={require('../images/chevron-right.png')}
                    style={{width:50,top:'40%'}}
                />
            </View>
        </View>
    </Swipeout>
);

const swipeSettings = {
    autoClose:true,
    onClose: () => {

    },
    onOpen: () => {

    },
    right: [
        {
            onPress: () => {
                Alert.alert(
                    'Are you sure you want to delete this remender?',
                    '',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
            },
            text: 'Delete', type: 'delete'
        }
    ]
}