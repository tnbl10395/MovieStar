import React from 'react';
import { TextInput, View, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const SearchButton = ({ searchBtn, searchButton }) => (
    <View style={{  
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey'
    }}>
        <View style={{  width: width * 0.98,
                        height: 40,
                        margin: 10,
                        backgroundColor: '#fff',
                        flexDirection:'row',
                        borderRadius: width * 0.015,
                        }}>
            <TouchableOpacity
                onPress={() => searchButton()}
                style={!searchBtn ? {
                        width: width * 0.98,
                        backgroundColor: '#fff',
                        borderRadius: width * 0.015,
                        alignItems: 'center'
                } : {
                        width: width * 0.1,
                        backgroundColor: '#fff',
                        borderRadius: width * 0.015,
                    }}>
                <Image
                    source={require('../images/magnify.png')}
                    style={{
                        padding: 10,
                    }}
                />
            </TouchableOpacity>
            {searchBtn ?
                <TextInput
                    underlineColorAndroid='grey'
                    style={{width: width * 0.82}}
                />
                :
                <View></View>
            }
        </View>
    </View >
);