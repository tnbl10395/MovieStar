import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { ItemFavoriteList } from '../templates/ItemList';
import HeaderFavoriteContainer from '../containers/HeaderFavoriteContainer';
import SearchButtonContainer from '../containers/SearchButtonContainer';

class FavoritesComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getFavoriteData();
    }

    render() {

        const favorite = 1;

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderFavoriteContainer navigation={this.props.navigation}/>
                <SearchButtonContainer />
                <FlatList
                    data={this.props.favoriteData}
                    renderItem={({ item }) => ItemFavoriteList(item,this.props.navigation,favorite)}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }
}
export default FavoritesComponent;