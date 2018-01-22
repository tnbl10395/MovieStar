import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import HeaderContainer from '../containers/HeaderContainer';

class FavoritesComponent extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={require('../images/heart.png')}
                style={[{tintColor:tintColor},{width:23,height:23}]}
                />
        ),
    }
    render(){
        return ( 
            <View style={{ flex: 1 }}>
                <HeaderContainer />
                {/* <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => ItemList(item,this.props.list)}
                    numColumns={this.props.list?1:2}
                    keyExtractor={(item,index)=>item.id}
                    key={this.props.list?1:0}
                /> */}
            </View>
        );
    }
}
export default FavoritesComponent;