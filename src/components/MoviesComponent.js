import React, { Component } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import HeaderContainer from '../containers/HeaderContainer';
import { ItemReminder } from '../templates/ItemReminder';
import { ItemList } from '../templates/ItemList';
import { MoviesStyle } from '../style/Style';

class MoviesComponent extends React.Component {

    constructor(props) {
        super(props);
        // this.state={
        //     refreshing:false
        // }
    }

    componentDidMount() {
        this.props.loadPopular();
        this.props.loadNowPlaying();
        this.props.loadTopRated();
        this.props.loadUpcoming();
        this.props.loadReminder();
        this.props.loadProfile();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data.length < 1){
            this.props.loadPopular();
        }
    }

    // onRefresh() {
    //     this.setState({
    //         refreshing:true,
    //     });
    //     this.props.loadPopular().then(()=>this.setState({refreshing:false}));
    // }

    render() {

        const favorite = 0;

        return (
            <View style={MoviesStyle.overview}>
                <HeaderContainer nav={this.props.navigation} />
                {
                    this.props.data.length == 0?
                    <ActivityIndicator 
                        size="large" 
                        color="#0000ff"
                        style={MoviesStyle.indicator} />
                    :null
                }
                <FlatList
                    // onRefresh={() => this.onRefresh()}
                    // refreshing={this.state.refreshing}
                    data={this.props.data}
                    renderItem={({ item }) => ItemList(item, this.props.list, this.props.navigation, favorite)}
                    numColumns={this.props.list ? 1 : 2}
                    keyExtractor={(item, index) => item.id}
                    key={this.props.list ? 1 : 0}
                />
            </View>
        );
    }
}


export default MoviesComponent;
