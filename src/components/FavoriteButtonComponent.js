import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, AsyncStorage, Alert } from 'react-native';

class FavoriteButtonComponent extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){ 
        const Obj = (item) => {
            return obj = {
                id: item.id,
                title: item.title,
                overview: item.overview,
                vote_average: item.vote_average,
                poster_path: item.poster_path,
                release_date: item.release_date
            }
        }
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.addFavorite(Obj(this.props.item))}>
                {
                    !this.props.check?
                <Image
                    source={require('../images/star-outline.png')}
                    style={{ tintColor: '#2980b9' }}
                />
                :
                    <Image 
                        source={require('../images/star.png')}
                        style={{tintColor:'#2980b9'}}
                    />
                }
            </TouchableWithoutFeedback>
        );
    }
}

export default FavoriteButtonComponent;