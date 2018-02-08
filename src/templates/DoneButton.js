import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export const DoneButton = ({ avatar, name, birthday, email, sex, editProfile, navigation }) => (
    <TouchableOpacity
        onPress={() => edit(avatar, name, birthday, email, sex, editProfile, navigation)}>
        <View style={{ backgroundColor: '#2196F3', width: 100, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 20, padding: 5 }}>DONE</Text>
        </View>
    </TouchableOpacity>
);

const edit = (avatar, name, birthday, email, sex, editProfile, navigation) => {
    var object = {
        avatar: avatar,
        name: name,
        birthday: birthday,
        email: email,
        sex: sex
    }
    editProfile(object);
    navigation.navigate('Home');
}
