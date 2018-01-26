import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ItemFavoriteList } from '../templates/ItemList';
import HeaderFavoriteContainer from '../containers/HeaderFavoriteContainer';
import SearchButtonContainer from '../containers/SearchButtonContainer';

class FavoritesComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/heart.png')}
                style={[{ tintColor: tintColor }, { width: 23, height: 23 }]}
            />
        ),
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getFavoriteData();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderFavoriteContainer />
                <SearchButtonContainer/>
                <FlatList
                    data={this.props.favoriteData}
                    renderItem={({ item }) => ItemFavoriteList(item)}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}
export default FavoritesComponent;