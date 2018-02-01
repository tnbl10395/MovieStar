import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import DetailButtonContainer from '../containers/DetailButtonContainer';

const { width, height } = Dimensions.get('window');

export const ItemList = (item, list, navigation) => (
    list ? List(item, navigation) : Grid(item,navigation)

);

export const ItemFavoriteList = (item,navigation) => (
    List(item,navigation)
);

const Grid = (item,navigation) => (
    <TouchableWithoutFeedback
        onPress={() => goDetailComponent(navigation, item)}>
        <View style={{ flexDirection: 'column', height: 250, flex: 1, marginBottom: 20 }} key={item.id}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={{ height: 200, margin: 5 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginLeft: 5, textAlign: 'center' }}>{item.title}</Text>
        </View>
    </TouchableWithoutFeedback>

);

const List = (item, navigation) => (
    <View style={{ flexDirection: 'column', borderTopWidth: 0.5, height: 250 }} key={item.id}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginLeft: 5 }}>{item.title}</Text>
            <FavoriteButtonContainer item={item} />
        </View>
        <TouchableWithoutFeedback
            onPress={() => goDetailComponent(navigation, item)}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                    style={{ height: 200, margin: 5, flex: 0.4 }}
                />
                <View style={{ flex: 0.6 }}>
                    {infoBox(item)}
                    <View>
                        <Text style={{ color: 'red' }}>Overview:</Text>
                        <Text style={{ color: 'black' }}>{item.overview}</Text>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, color: 'black' }}>Release date:</Text>
            <Text style={{ fontSize: 18, color: 'red' }}>{item.release_date}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, color: 'black' }}>Rating:</Text>
            <Text style={{ fontSize: 18, color: 'red' }}>{item.vote_average}/10.0</Text>
        </View>
    </View>
)

