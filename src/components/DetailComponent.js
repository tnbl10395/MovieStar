import React, { Component } from 'react';
import { View } from 'react-native';
import { DetailMovie } from '../templates/DetailMovie';
class DetailComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <DetailMovie/>
        );
    }
}

export default DetailComponent;