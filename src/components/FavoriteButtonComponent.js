import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, AsyncStorage, Alert } from 'react-native';

class FavoriteButtonComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){ 
        const eventFavorite = () => {
            // if(this.props.item.check==true){
            //     alert(this.props.item.check);
            // }else{
            //     alert(this.props.item.check);
            this.props.addFavorite(this.props.item);
            alert(this.props.star1);
            // }
        }
        return (
            <TouchableWithoutFeedback
                onPress={() => eventFavorite()}>
                <Image
                        source={
                            true? 
                                require('../images/star-outline.png'):require('../images/star.png')
                            }
                        style={{ tintColor: '#2980b9' }}
                    />
            </TouchableWithoutFeedback>
        );
    }
}

export default FavoriteButtonComponent;