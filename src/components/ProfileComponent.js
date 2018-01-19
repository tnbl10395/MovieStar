import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../templates/Avatar';
import { DoneButton } from '../templates/DoneButton';
import { CancelButton } from '../templates/CancelButton';

class ProfileComponent extends React.Component {
    render() {
        return (
            <View style={{top:'3%'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                    <CancelButton/>
                    <DoneButton/>
                </View>
                <Avatar/>
            </View>
        );
    }
}

export default ProfileComponent;