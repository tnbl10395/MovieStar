import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export const HeaderDetail = ({ navigation, title }) => (
    <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2980b9', paddingBottom: 10 }}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Movies')}>
            <Image
                source={require('../images/chevron-left.png')}
                style={{ top: 5 }}
            />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, top: 10, textAlign: 'center' }}>{title}</Text>
        <View>
        </View>
    </View>
);
