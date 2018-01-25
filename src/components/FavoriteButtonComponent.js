import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, Alert } from 'react-native';

class FavoriteButtonComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            star: null
        }
    }

    render() {
        const eventFavorite = () => {

            if (this.props.item.check == require('../images/star-outline.png')) {
                // this.setState({
                //     star: this.props.item.check
                // })
                this.props.addFavorite(this.props.item);
                alert(this.props.item.check)
            } else if(this.props.item.check == require('../images/star.png')){
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
            // this.setState({
            //     star: this.props.item.check
            // })
            alert(this.props.item.check)
        }

        return (
            <TouchableWithoutFeedback
                onPress={() => eventFavorite()}>
                <Image

                    source={this.props.item.check}
                    style={{ tintColor: '#2980b9' }}
                />
            </TouchableWithoutFeedback>
        );
    }
}

export default FavoriteButtonComponent;