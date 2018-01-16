import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import { TabComponent, DrawComponent } from './src/routes/Route';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor="#2980b9"
                    barStyle="light-content"
                />
                <DrawComponent />
            </View>
        );
    }
}

AppRegistry.registerComponent('MovieStar', () => App);
