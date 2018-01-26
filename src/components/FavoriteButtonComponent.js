import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, Alert } from 'react-native';

class FavoriteButtonComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // star: this.props.item.check
        }
    }

    render() {
        let url = this.props.item.check? require('../images/star.png'):require('../images/star-outline.png');

        const eventFavorite = () => {

            if (this.props.item.check == false) {
                this.props.addFavorite(this.props.item);
                this.setState({});
            } else if(this.props.item.check == true){
                Alert.alert(
                    "Are you sure you want to unfavorate this movie?",
                    '',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => remove() },
                    ]
                )
            }

        }

        const remove = () => {
            this.props.removeFavorite(this.props.item);
            this.setState({});
        }

        return (
            <TouchableWithoutFeedback
                onPress={() => eventFavorite()}>
                <Image
                    source={url}
                    style={{ tintColor: '#2980b9' }}
                />
            </TouchableWithoutFeedback>
        );
    }
}

export default FavoriteButtonComponent;