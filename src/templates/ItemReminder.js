import React from 'react';
import { View, Image, Text, Alert, Button } from 'react-native';
import Swipeout from 'react-native-swipeout';

export const ItemReminder = (item, removeReminder) => (
    <Swipeout
        right={swipeoutBtns}
        style={{ backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', borderWidth: 1 }}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={{ height: 150, margin: 5, flex: 0.3 }}
            />
            <View style={{ justifyContent: 'space-around', flex: 0.7, marginLeft: 2 }}>
                <Text style={{ fontSize: 24, color: 'black' }}>{item.title}</Text>
                <Text style={{ fontSize: 24, color: 'black' }}>{item.date} {item.time}</Text>
            </View>
            <View>
                <Image
                    source={require('../images/chevron-right.png')}
                    style={{ width: 50, top: '40%' }}
                />
            </View>
        </View>
    </Swipeout>
);

const swipeoutBtns = [
    {
        backgroundColor:'red',
        text: 'Delete',
        onPress: () => {
            Alert.alert(
                'Are you sure you want to delete this remender?',
                '',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => removeReminder() },
                ],
                { cancelable: false }
            )
        }
    }
]
