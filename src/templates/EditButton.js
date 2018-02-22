import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { EditBtnStyle } from '../style/Style';

export const EditButton = ({navigation,goProfile}) => (
    <View style={EditBtnStyle.overview}>
        <TouchableOpacity
            onPress={()=>edit(navigation,goProfile)}>
            <View style={EditBtnStyle.viewBtn}>
                <Text style={EditBtnStyle.textBtn}>Edit</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const edit = (navigation,goProfile) => {
    goProfile();
    navigation.navigate('Profile');
}