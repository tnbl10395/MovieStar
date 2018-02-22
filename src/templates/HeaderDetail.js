import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { HeaderStyle } from '../style/Style';

export const HeaderDetailMovie = ({ navigation, title }) => (
    <View style={HeaderStyle.overview}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Movies')}>
            <Image
                source={require('../images/chevron-left.png')}
                style={HeaderStyle.btnBack}
            />
        </TouchableOpacity>
        <Text style={HeaderStyle.textName}>{title}</Text>
        <View>
        </View>
    </View>
);

export const HeaderDetailFavorite = ({ navigation, title }) => (
    <View style={HeaderStyle.overview}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Favorites')}>
            <Image
                source={require('../images/chevron-left.png')}
                style={HeaderStyle.btnBack}
            />
        </TouchableOpacity>
        <Text style={HeaderStyle.textName}>{title}</Text>
        <View>
        </View>
    </View>
);

