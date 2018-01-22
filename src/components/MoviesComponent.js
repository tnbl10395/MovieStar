import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import HeaderContainer from '../containers/HeaderContainer';
import { ItemReminder } from '../templates/ItemReminder';
import { ItemList } from '../templates/ItemList';

class MoviesComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        tabBarLabel: 'Movies',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/home.png')}
                style={[{ tintColor: tintColor }, { width: 23, height: 23 }]}
            />
        ),
    }

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderContainer />
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => ItemList(item,this.props.list)}
                    numColumns={this.props.list?1:2}
                    keyExtractor={(item,index)=>item.id}
                    key={this.props.list?1:0}
                />
            </View>
        );
    }
}


export default MoviesComponent;
