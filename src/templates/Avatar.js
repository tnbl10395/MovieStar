import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, TouchableNativeFeedback, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export const Avatar = ({ data, status, showDate, name, changeName, sex, changeSex, birthday, changeBirthday, email, changeEmail }) => (
    <View>
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                onPress={()=>ImagePicker.launchImageLibrary(options, (response)  => {
                    // Same code as in above section!
                  })}>
                <Image
                    source={require('../images/user.png')}
                    style={{ width: 120, height: 120, borderRadius: 120 }}
                />
            </TouchableOpacity>
            {
                !status ?
                    <Text style={{ marginTop: 15, color: 'black', fontWeight: 'bold', fontSize: 24 }}>{data.name}</Text>
                    :
                    textName(name, changeName)
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
                        textEmail(email, changeEmail)
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
                        textSex(sex, changeSex)

                }
            </View>
        </View>
    </View>
);

const changeMale = (sex, changeSex) => {
    if (sex == false) {
        sex = true
        changeSex(sex)
    }
}

const changeFemale = (sex, changeSex) => {
    if (sex == true) {
        sex = false
        changeSex(sex)
    }
}

const textName = (name, changeName) => (
    <TouchableNativeFeedback>
        <TextInput
            value={name}
            onChangeText={(text) => changeName(text)}
            underlineColorAndroid="white"
            style={{ marginTop: 15, color: 'black', fontWeight: 'bold', fontSize: 24 }}
        />
    </TouchableNativeFeedback>
)

const textEmail = (email, changeEmail) => (
    <TouchableNativeFeedback onPress={() => showDate()}>
        <View style={{ width: '100%' }}>
            <TextInput
                value={email}
                onChangeText={(text) => changeEmail(text)}
                underlineColorAndroid="white"
                style={{ color: 'black', fontSize: 20, marginLeft: 20 }}
            />
        </View>
    </TouchableNativeFeedback>
)

const textSex = (sex, changeSex) => (
    <View style={{ width: '70%', flexDirection: 'row', marginLeft: 20, justifyContent: 'space-between', marginTop: 10 }}>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={() => changeMale(sex, changeSex)}>
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
                        sex ?
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
            <TouchableOpacity
                onPress={() => changeFemale(sex, changeSex)}>
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
                        !sex ?
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
)