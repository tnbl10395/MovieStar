import React, { Component } from 'react';
import { View, Text, Image, WebView } from 'react-native';
import HeaderComponentContainer from '../containers/HeaderComponentContainer';
class AboutComponent extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <HeaderComponentContainer navigation={this.props.navigation} name={'About'} />
                <WebView
                    source={{ uri: 'https://www.themoviedb.org/about' }}
                    style={{ width: '100%' }}
                />
            </View>
        );
    }
}
export default AboutComponent;