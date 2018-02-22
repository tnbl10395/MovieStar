import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ReminderListStyle } from '../style/Style';

export const ReminderList = ({ navigation, data }) => (
    <View style={ReminderListStyle.overview}>
        <Text style={ReminderListStyle.title}>Reminder List:</Text>
        <FlatList

            data={data.length > 2? data.slice(data.length-2,data.length).reverse():data.reverse()}
            renderItem={({ item }) =>
                <View style={ReminderListStyle.viewText}>
                    <Text style={ReminderListStyle.text}>{item.title} - {item.date.substr(0, 4)} - {item.vote_average}/10</Text>
                    <Text style={ReminderListStyle.text}>{item.date} {item.time}</Text>
                </View>
            }
            keyExtractor={(item,index)=>item.id}
        />
        <View style={ReminderListStyle.viewBtnShowAll}>
            <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
                <View style={ReminderListStyle.btnShowAll}>
                    <Text style={ReminderListStyle.textBtnShowAll}>Show All</Text>
                </View>
            </TouchableOpacity>
        </View>
        <Text style={ReminderListStyle.textCopyRight}>Copyright@Enc 2017</Text>
    </View>
);