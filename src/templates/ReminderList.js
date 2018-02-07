import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const ReminderList = ({ navigation,data }) => (
    <View style={{ marginTop: 15 }}>
        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', margin: 5 }}>Reminder List:</Text>
        {
            data != null ?
                <View style={{ backgroundColor: '#00BFA5', margin: 5, padding: 5 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>{data.title} - {data.date.substr(0,4)} - {data.vote_average}/10</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>{data.date} {data.time}</Text>
                </View>
                :null
        }
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
                <View style={{ backgroundColor: '#303F9F', width: 110, borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Show All</Text>
                </View>
            </TouchableOpacity>
        </View>
        <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>Copyright@Enc 2017</Text>
    </View>
);