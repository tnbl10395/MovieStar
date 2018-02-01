import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const ReminderList = ({navigation}) => (
    <View style={{marginTop:15}}>
        <Text style={{color:'black',fontSize:24,fontWeight:'bold',margin:5}}>Reminder List:</Text>
        <View style={{backgroundColor:'#00BFA5',margin:5,padding:5}}>
            <Text style={{fontSize:18,color:'black'}}>The Dark Tower = 2017 - 5.6/10</Text>
            <Text style={{fontSize:18,color:'black'}}>2017-09-03 10:06</Text>
        </View>
        <View style={{backgroundColor:'#00BFA5',margin:5,padding:5}}>
            <Text style={{fontSize:18,color:'black'}}>The Dark Tower = 2017 - 5.6/10</Text>
            <Text style={{fontSize:18,color:'black'}}>2017-09-03 10:06</Text>
        </View>
        <View style={{alignItems:'center',marginTop:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Reminder')}>
                <View style={{backgroundColor:'#303F9F',width:110,borderRadius:5}}>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center'}}>Show All</Text>
                </View>
            </TouchableOpacity>
        </View>
        <Text style={{color:'black',fontSize:20,textAlign:'center'}}>Copyright@Enc 2017</Text>
    </View>
);