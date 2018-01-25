import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
// import { addFavorites } from '../localDatabase/localdatabase';

const { width, height } = Dimensions.get('window');

export const ItemList = (item, list, star) => (
    list ? List(item, star) : Grid(item)

);

export const ItemFavoriteList = (item) => (
    List(item)
);

const Grid = (item) => (
    <View style={{ flexDirection: 'column', height: 250, flex: 1, marginBottom: 20 }} key={item.id}>
        <Image
            source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
            style={{ height: 200, margin: 5 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginLeft: 5, textAlign: 'center' }}>{item.title}</Text>
    </View>
);

const List = (item, star) => (
    <View style={{ flexDirection: 'column', borderTopWidth: 0.5, height: 250 }} key={item.id}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black', marginLeft: 5 }}>{item.title}</Text>
            <FavoriteButtonContainer item={item} />
        </View>
        <View style={{ flexDirection: 'row' }}>
            <Image
                source={{ uri: 'http://image.tmdb.org/t/p/w185/' + item.poster_path }}
                style={{ height: 200, margin: 5, flex: 0.4 }}
            />
            <View style={{ flex: 0.6 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Release date:</Text>
                    <Text style={{ fontSize: 18, color: 'red' }}>{item.release_date}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Rating:</Text>
                    <Text style={{ fontSize: 18, color: 'red' }}>{item.vote_average}/10.0</Text>
                </View>
                <View>
                    <Text style={{ color: 'red' }}>Overview:</Text>
                    <Text style={{ color: 'black' }}>{item.overview}</Text>
                </View>
            </View>
        </View>
    </View>
);



