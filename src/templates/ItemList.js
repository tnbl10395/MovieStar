import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

export const ItemList = () => (
    <View style={{flexDirection:'column',padding:5}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Pokemon: Giratina & The sky warrior</Text>
            <TouchableWithoutFeedback
                onPress={()=>alert('ok')}>
                <Image 
                    source={require('../images/star-outline.png')}
                    style={{tintColor:'#2980b9'}}
                />
                {/* <Image 
                    source={require('../images/star.png')}
                    style={{tintColor:'#2980b9'}}
                /> */}
            </TouchableWithoutFeedback>
        </View>
        <View>
            <Image
                source={{uri:'http://image.phimmoi.net/film/2620/poster.medium.jpg'}}
                style={{height:200,margin:5,width:170}}
            />
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Release date:</Text>
                </View>
            </View>
        </View>
    </View>
);