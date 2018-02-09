import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export const HeaderFavorite = ({ navigation }) => (
    <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2980b9', paddingBottom: 10 }}>
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
                source={require('../images/view-sequential.png')}
                style={{ width: 40, height: 40, left: 25, top: 5 }}
            />
        </TouchableWithoutFeedback>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, top: 5 }}>Favorite</Text>
        <View>
        </View>
    </View>
);
