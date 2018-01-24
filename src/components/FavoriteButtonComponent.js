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
            if(this.props.item.check==true){
                alert('ok');
            }else{
                this.props.addFavorite(this.props.item)
            }
        }
        return (
            <TouchableWithoutFeedback
                onPress={() => eventFavorite()}>
                {
                    this.props.star.indexOf(this.props.item.id)==-1?
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