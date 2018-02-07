import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, TouchableNativeFeedback, Button } from 'react-native';

export const Avatar = ({ data, status, showDate }) => (
    <View>
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../images/user.png')}
                style={{ width: 120, height: 120, borderRadius: 120 }}
            />
            {
                !status ?
                    <Text style={{ marginTop: 15, color: 'black', fontWeight: 'bold', fontSize: 24 }}>{data.name}</Text>
                    :
                    <TouchableNativeFeedback>
                        <View style={{ width: '100%' }}>
                            <TextInput
                                placeholder={data.name}
                                placeholderTextColor="black"
                                underlineColorAndroid="white"
                                placeholderStyle={{marginTop: 15,fontWeight: 'bold', fontSize: 24}}
                                style={{ marginTop: 15, color: 'black', fontWeight: 'bold', fontSize: 24 }}
                            />
                        </View>
                    </TouchableNativeFeedback>
            }
        </View>
        <View style={{ margin: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <Image
                    source={require('../images/cake-variant.png')}
                />
                {
                    !status ?
                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 20 }}>{data.birthday}</Text>
                        :
                        <TouchableNativeFeedback onPress={() => showDate()}>
                            <View style={{ width: '100%' }}>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 20, marginTop: 10 }}>{data.birthday}</Text>
                            </View>
                        </TouchableNativeFeedback>
                }
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <Image
                    source={require('../images/email.png')}
                />
                {
                    !status ?
                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 20 }}>{data.email}</Text>
                        :
                        <TouchableNativeFeedback onPress={() => showDate()}>
                            <View style={{ width: '100%' }}>
                                <TextInput
                                    placeholder={data.email}
                                    placeholderTextColor="black"
                                    underlineColorAndroid="white"
                                    style={{ color: 'black', fontSize: 20, marginLeft: 20 }}
                                />
                            </View>
                        </TouchableNativeFeedback>
                }
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../images/account.png')}
                />
                {
                    !status ?
                        <Text style={{ color: 'black', fontSize: 20, marginLeft: 20 }}>{data.sex ? "Male" : "Female"}</Text>
                        :
                        <View style={{ width: '70%', flexDirection: 'row', marginLeft: 20, justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View style={{
                                        height: 24,
                                        width: 24,
                                        borderRadius: 12,
                                        borderWidth: 2,
                                        borderColor: '#000',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        {
                                            data.sex ?
                                                <View style={{
                                                    height: 12,
                                                    width: 12,
                                                    borderRadius: 6,
                                                    backgroundColor: '#000',
                                                }} />
                                                : null
                                        }
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 5 }}>Male</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View style={{
                                        height: 24,
                                        width: 24,
                                        borderRadius: 12,
                                        borderWidth: 2,
                                        borderColor: '#000',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        {
                                            !data.sex ?
                                                <View style={{
                                                    height: 12,
                                                    width: 12,
                                                    borderRadius: 6,
                                                    backgroundColor: '#000',
                                                }} />
                                                : null
                                        }
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 5 }}>Female</Text>
                            </View>
                        </View>
                }
            </View>
        </View>
    </View>
);
