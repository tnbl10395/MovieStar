import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, ScrollView  } from 'react-native';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import { infoBox } from '../templates/ItemList';
import { DetailMovieStyle } from '../style/Style';


export const DetailMovie = ({detail,item,onPress}) => (
    <View style={DetailMovieStyle.overview}>
        <View style={DetailMovieStyle.header}>
            <View style={DetailMovieStyle.viewBtnFavorite}>
                <FavoriteButtonContainer item={item}/>
            </View>
            <View>
                {infoBox(detail)}
            </View>
        </View>
        <View style={DetailMovieStyle.body}>
            <View style={DetailMovieStyle.viewPoster}>
                <Image 
                    source={{uri:'http://image.tmdb.org/t/p/w185'+detail.poster_path}} 
                    style={DetailMovieStyle.poster}
                />
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={DetailMovieStyle.viewBtnReminder}>
                        <Text style={DetailMovieStyle.textBtnReminder}>REMINDER</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
            <View style={DetailMovieStyle.viewContent}>
                <ScrollView>
                    <Text style={DetailMovieStyle.titleContent}>Overview:</Text>
                    <Text style={DetailMovieStyle.textContent}>{item.overview}</Text>
                </ScrollView>
            </View>
        </View>
    </View>
);
