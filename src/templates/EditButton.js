import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const EditButton = () => (
    <View style={{alignItems:'center'}}>
        <TouchableOpacity>
            <View style={{backgroundColor:'#303F9F',width:110,borderRadius:5}}>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center'}}>Edit</Text>
            </View>
        </TouchableOpacity>
    </View>
);