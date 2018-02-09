import React from 'react';
import { View, Text } from 'react-native';

export const NotificationFavorite = ({ amount, statusFavorite }) => (
    amount != 0 ?
        <View style={{ backgroundColor: 'red', height: 25, width: 25, borderRadius: 50, position: 'absolute', bottom: 13, left: 15, justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{amount}</Text>
        </View>
        :
        null
);