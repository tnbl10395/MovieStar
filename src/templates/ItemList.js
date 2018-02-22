import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import DetailButtonContainer from '../containers/DetailButtonContainer';
import { ItemListStyle } from '../style/Style';

export const ItemList = (item, list, navigation, favorite) => (
    list ? List(item, navigation, favorite) : Grid(item, navigation)

);

export const ItemFavoriteList = (item, navigation, favorite) => (
    List(item, navigation, favorite)
);

const Grid = (item, navigation) => (
    <TouchableWithoutFeedback
        onPress={() => goDetailComponent(navigation, item)}>
        <View style={ItemListStyle.overviewGrid} key={item.id}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={ItemListStyle.posterGrid}
            />
            <Text style={ItemListStyle.titleGrid}>{item.title}</Text>
        </View>
    </TouchableWithoutFeedback>

);

const List = (item, navigation, favorite) => (
    <View style={ItemListStyle.overviewList} key={item.id}>
        <View style={ItemListStyle.header}>
            <Text style={ItemListStyle.textHeader}>{item.title}</Text>
            <FavoriteButtonContainer item={item} favorite={favorite} />
        </View>
        <TouchableWithoutFeedback
            onPress={() => goDetailComponent(navigation, item)}>
            <View style={ItemListStyle.body}>
                <Image
                    source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                    style={ItemListStyle.poster}
                />
                <View style={ItemListStyle.viewTextBody}>
                    {infoBox(item)}
                    <View>
                        <Text style={ItemListStyle.titleBody}>Overview:</Text>
                        <Text style={ItemListStyle.textBody}>{item.overview}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
);

const goDetailComponent = (navigation, item) => {
    navigation.navigate('Detail', { name: item })
}

export const infoBox = (item) => (
    <View>
        <View style={ItemListStyle.viewInfoBox}>
            <Text style={ItemListStyle.titleInfoBox}>Release date:</Text>
            <Text style={ItemListStyle.textInfoBox}>{item.release_date}</Text>
        </View>
        <View style={ItemListStyle.viewInfoBox}>
            <Text style={ItemListStyle.titleInfoBox}>Rating:</Text>
            <Text style={ItemListStyle.textInfoBox}>{item.vote_average}/10.0</Text>
        </View>
    </View>
)

