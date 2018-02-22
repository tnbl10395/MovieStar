import React from 'react';
import { TextInput, View, TouchableOpacity, Image } from 'react-native';
import { SearchBtnStyle } from '../style/Style';


export const SearchButton = ({ searchBtn, searchButton, input, searchData }) => (
    <View style={SearchBtnStyle.overview}>
        <View style={SearchBtnStyle.viewBtnSearch}>
            <TouchableOpacity
                onPress={() => searchButton()}
                style={!searchBtn ? SearchBtnStyle.btnShow : SearchBtnStyle.btnHide}>
                <Image
                    source={require('../images/magnify.png')}
                    style={SearchBtnStyle.icon}
                />
            </TouchableOpacity>
            {searchBtn ?
                <TextInput
                    onChangeText={(str)=>searchData(str)}
                    underlineColorAndroid='grey'
                    style={SearchBtnStyle.textInput}
                />
                :
                null
            }
        </View>
    </View >
);

