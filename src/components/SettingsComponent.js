import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class SettingsComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require('../images/settings.png')}
                style={[{tintColor:tintColor},{width:23,height:23}]}
                />
        ),
    }
    render(){
        return ( 
            <View>
                <Text>Settings Component</Text>
            </View>
        );
    }
}
export default SettingsComponent;