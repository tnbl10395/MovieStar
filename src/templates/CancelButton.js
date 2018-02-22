import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { CancelBtnStyle } from '../style/Style';

export const CancelButton = ({navigation, goHome}) => (
    <TouchableOpacity
        onPress={()=>home(navigation,goHome)}>
        <View style={CancelBtnStyle.viewBtn}>
            <Text style={CancelBtnStyle.textBtn}>CANCEL</Text>
        </View>
    </TouchableOpacity>
);

const home = (navigation,goHome) => {
    navigation.navigate('Home');
    goHome()
}