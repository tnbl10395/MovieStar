import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { HeaderStyle } from '../style/Style';


export const HeaderFavorite = ({ navigation }) => (
    <View style={HeaderStyle.overview}>
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('DrawerOpen')}>
            <Image
                source={require('../images/view-sequential.png')}
                style={HeaderStyle.btnProfile}
            />
        </TouchableWithoutFeedback>
        <Text style={HeaderStyle.textName}>Favorite</Text>
        <View>
        </View>
    </View>
);
