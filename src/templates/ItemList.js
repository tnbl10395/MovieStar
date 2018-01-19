import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

export const ItemList = () => (
    <View style={{flexDirection:'column',borderBottomWidth:1,borderTopWidth:1,height:250}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:18,color:'black',marginLeft:5}}>Pokemon: Giratina & The sky warrior</Text>
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
        <View style={{flexDirection:'row'}}>
            <Image
                source={{uri:'http://image.phimmoi.net/film/2620/poster.medium.jpg'}}
                style={{height:200,margin:5,flex:0.4}}
            />
            <View style={{flex:0.6}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,color:'black'}}>Release date:</Text>
                    <Text style={{fontSize:18,color:'red'}}>10/06/2017</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:18,color:'black'}}>Rating:</Text>
                    <Text style={{fontSize:18,color:'red'}}>8.0/10.0</Text>
                </View>
                <View>
                    <Text style={{color:'red'}}>Overview:</Text>
                    <Text style={{color:'black'}}>When a new Pokèmon emerges able to create parallel dimensions, it's up to Ash Ketchum and his friends to stop a mysterious stranger, who has plans to harness Giratina's power and control Reverse world, destroying the real world in the process!</Text>
                </View>
            </View>
        </View>
    </View>
);