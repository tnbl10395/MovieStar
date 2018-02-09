import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class AboutComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'About',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require('../images/information.png')}
                // style={[{tintColor:tintColor},{width:23,height:23}]}
            />
        ),
    }
    render(){
        return ( 
            <View>
                <Text>About Component</Text>
            </View>
        );
    }
}
export default AboutComponent;