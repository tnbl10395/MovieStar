import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

export const ReminderList = ({ navigation, data }) => (
    <View style={{ marginTop: 15 }}>
        {/* <Text>{data[data.length-1]}</Text> */}
        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', margin: 5 }}>Reminder List:</Text>
        <FlatList

            data={data.length > 2? data.slice(data.length-2,data.length).reverse():data.reverse()}
            renderItem={({ item }) =>
                <View style={{ backgroundColor: '#00BFA5', margin: 5, padding: 5 }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>{item.title} - {item.date.substr(0, 4)} - {item.vote_average}/10</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>{item.date} {item.time}</Text>

                </View>
            }
            keyExtractor={(item,index)=>item.id}
        />
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