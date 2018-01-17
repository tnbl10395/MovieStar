import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const CancelButton = () => (
    <TouchableOpacity>
        <View style={{backgroundColor:'#4DB6AC',width:100,borderRadius:5}}>
            <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:20,padding:5}}>CANCEL</Text>
        </View>
    </TouchableOpacity>
);

