import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import AppWithNavigationState from './src/routes/Route';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/providers/rootReducer';

const store = createStore(rootReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <StatusBar
                        backgroundColor="#2980b9"
                        barStyle="light-content"
                    />
                    <AppWithNavigationState />
                </View>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('MovieStar', () => App);
