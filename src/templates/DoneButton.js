import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const DoneButton = () => (
    <TouchableOpacity>
        <View style={{backgroundColor:'#2196F3',width:100,borderRadius:5}}>
            <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:20,padding:5}}>DONE</Text>
        </View>
    </TouchableOpacity>
);

