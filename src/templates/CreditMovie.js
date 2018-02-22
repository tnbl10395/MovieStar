import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { DetailMovieStyle } from '../style/Style';

export const CreditMovie = ({credit}) => (
    <View style={DetailMovieStyle.overviewCredit}>
        <Text style={DetailMovieStyle.titleCredit}>Cast & Crew</Text>
        <FlatList
            data={credit}
            renderItem={({item})=>ListCredit(item)}
            keyExtractor={(item,index)=>item.id}
            horizontal={true}
        />
    </View>
)

export const CreditFavorite = ({credit}) => (
    <View style={DetailMovieStyle.overviewCredit}>
        <Text style={DetailMovieStyle.titleCredit}>Cast & Crew</Text>
        <FlatList
            data={credit}
            renderItem={({item})=>ListCredit(item)}
            keyExtractor={(item,index)=>item.id}
            horizontal={true}
        />
    </View>
)

const ListCredit = (item) => (
    <View key={item.id} style={DetailMovieStyle.viewListCredit}>
        {
            item.profile_path!=null?
            <Image
                source={{uri:'http://image.tmdb.org/t/p/w185'+item.profile_path}} 
                style={DetailMovieStyle.imageActor}
            />
            :
            <Image
                source={require('../images/user.png')} 
                style={DetailMovieStyle.imageActor}
            />  
        }
        <View style={DetailMovieStyle.viewNameActor}>
            <Text style={DetailMovieStyle.nameActor}>{item.name}</Text>
        </View>
    </View>
)