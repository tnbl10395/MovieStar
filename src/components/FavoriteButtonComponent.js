import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image } from 'react-native';

class FavoriteButton extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        async function addFavorites(obj) {
            try{    
                // var a = await AsyncStorage.getItem('"'+obj.id+'"');
                // alert(a);
                await AsyncStorage.setItem('"'+obj.id+'"',JSON.stringify(obj),()=>{
                    alert('Successfully!')
                });
            }catch(error){
                alert(error)
            }
        }
        
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
                onPress={() => addFavorites(Obj(this.props.item))}>
                {/* {
                    !favorites? */}
                <Image
                    source={require('../images/star-outline.png')}
                    style={{ tintColor: '#2980b9' }}
                />
                {/* :
                    <Image 
                        source={require('../images/star.png')}
                        style={{tintColor:'#2980b9'}}
                    />
                } */}
            </TouchableWithoutFeedback>
        );
    }
}