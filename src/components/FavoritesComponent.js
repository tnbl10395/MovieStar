import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class FavoritesComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require('../images/heart.png')}
                style={[{tintColor:tintColor},{width:23,height:23}]}
                />
        ),
    }
    render(){
        return ( 
            <View>
                <Text>Favorites Component</Text>
            </View>
        );
    }
}
export default FavoritesComponent;