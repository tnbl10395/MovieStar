import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { HeaderStyle } from '../style/Style';

export const Header = ({list, changeShowList, changeTitle, title, nav}) => (
    <View style={HeaderStyle.overview}>
        <TouchableWithoutFeedback onPress={()=>nav.navigate('DrawerOpen')}>
            <Image
                source={require('../images/view-sequential.png')}
                style={HeaderStyle.btnProfile}
            />
        </TouchableWithoutFeedback>
        <TouchableOpacity
            onPress={()=>changeTitle(title)}>
            <Text style={HeaderStyle.textName}>{title}</Text>
        </TouchableOpacity>
        <View>
            <TouchableWithoutFeedback
                onPress={()=>changeShowList()}>
                {
                    !list?
                    <Image
                        source={require('../images/view-list.png')}
                        style={HeaderStyle.btnChangeList}
                    />
                    :<Image
                        source={require('../images/view-module.png')}
                        style={HeaderStyle.btnChangeList}
                    />
                }
            </TouchableWithoutFeedback>
        </View>      
    </View>
);

export const HeaderReminder = ({ navigation }) => (
    <View style={HeaderStyle.overview}>
        <TouchableOpacity
            onPress={()=>navigation.navigate('Home')}>
            <Image
                source={require('../images/chevron-left.png')}
                style={HeaderStyle.btnBack}
            />
        </TouchableOpacity>
        <Text style={HeaderStyle.textName}>Reminders</Text>
        <View>
        </View>
    </View>
);