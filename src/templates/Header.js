import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export const Header = ({list, changeShowList, changeTitle, title, navigation}) => (
    <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#2980b9',paddingBottom:10}}>
        <TouchableWithoutFeedback onPress={()=>navigaton.navigate('DrawerOpen')}>
            <Image
                source={require('../images/view-sequential.png')}
                style={{width:40,height:40,left:25,top:5}}
            />
        </TouchableWithoutFeedback>
        <TouchableOpacity
            onPress={()=>changeTitle(title)}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:24,top:5}}>{title}</Text>
        </TouchableOpacity>
        <View>
            <TouchableWithoutFeedback
                onPress={()=>changeShowList()}>
                {
                    list?
                    <Image
                        source={require('../images/view-list.png')}
                        style={{width:40,height:40,right:25,top:5}}
                    />
                    :<Image
                        source={require('../images/view-module.png')}
                        style={{width:40,height:40,right:25,top:5}}
                    />
                }
            </TouchableWithoutFeedback>
        </View>      
    </View>
);
