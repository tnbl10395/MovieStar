import React from 'react';
import { View, Text } from 'react-native';
import { NotificationStyle } from '../style/Style';

export const NotificationFavorite = ({ amount, statusFavorite }) => (
    amount != 0 ?
        <View style={NotificationStyle.overview}>
            <Text style={NotificationStyle.text}>{amount}</Text>
        </View>
        :
        null
);