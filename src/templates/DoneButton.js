import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { DoneBtnStyle } from '../style/Style';

export const DoneButton = ({ avatar, name, birthday, email, sex, editProfile, navigation, goHome }) => (
    <TouchableOpacity
        onPress={() => edit(avatar, name, birthday, email, sex, editProfile, navigation, goHome)}>
        <View style={DoneBtnStyle.viewBtn}>
            <Text style={DoneBtnStyle.textBtn}>DONE</Text>
        </View>
    </TouchableOpacity>
);

const edit = (avatar, name, birthday, email, sex, editProfile, navigation, goHome) => {
    var object = {
        avatar: avatar,
        name: name,
        birthday: birthday,
        email: email,
        sex: sex
    }
    editProfile(object);
    goHome();
    navigation.navigate('Home');
}
