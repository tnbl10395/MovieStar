import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../templates/Header';
import { ItemReminder } from '../templates/ItemReminder';
import { ItemList } from '../templates/ItemList';

class MoviesComponent extends React.Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        tabBarLabel: 'Movies',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require('../images/home.png')}
                style={[{tintColor:tintColor},{width:23,height:23}]}
            />
        ),
    }

    componentWillMount() {
        this.props.loadData();
    }

    render(){
        return ( 
            <View style={{flex:1}}>
                <Header/>
                {/* <ItemReminder/> */}
                <ItemList/>
            </View>
        );
    }
}

export default MoviesComponent;
