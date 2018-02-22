import React from 'react';
import { View, Image, Text, Alert, Button } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { ItemReminderStyle } from '../style/Style';

export const ItemReminder = (item, removeReminder) => (
    <Swipeout
        right={[
            {
                type:'delete',
                text: 'Delete',
                onPress: () => {
                    Alert.alert(
                        'Are you sure you want to delete this remender?',
                        '',
                        [
                            { text: 'Cancel', style: 'cancel' },
                            { text: 'OK', onPress: () => removeReminder(item) },
                        ],
                        { cancelable: false }
                    )
                }
            }
        ]}>
        <View style={ItemReminderStyle.overview}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={ItemReminderStyle.poster}
            />
            <View style={ItemReminderStyle.viewText}>
                <Text style={ItemReminderStyle.text}>{item.title}</Text>
                <Text style={ItemReminderStyle.text}>{item.date} {item.time}</Text>
            </View>
            <View>
                <Image
                    source={require('../images/chevron-right.png')}
                    style={ItemReminderStyle.btnSwipe}
                />
            </View>
        </View>
    </Swipeout>
);

