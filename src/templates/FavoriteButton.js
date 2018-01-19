import React from 'react';
import { TouchableWithoutFeedback,Image } from 'react-native';
import { connect } from 'react-redux';
import { addFavoriteList } from '../actions/PopularActions';

const FavoriteButton = ({favorites,addFavorite}) => (
    <TouchableWithoutFeedback
        onPress={()=>addFavorite()}>
        {
            !favorites?
            <Image 
                source={require('../images/star-outline.png')}
                style={{tintColor:'#2980b9'}}
            />
            :
            <Image 
                source={require('../images/star.png')}
                style={{tintColor:'#2980b9'}}
            />
        }
    </TouchableWithoutFeedback>
);

const mapStateToProps = (state) => ({
    favorites: state.popularReducer.favorites
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: () => {
        dispatch( addFavoriteList() );
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteButton)