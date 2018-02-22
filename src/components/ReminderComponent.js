import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ItemReminder } from '../templates/ItemReminder';
import HeaderReminder from '../containers/HeaderReminderContainer';

class ReminderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'white' }}>
                <HeaderReminder navigation={this.props.navigation}/>
                <FlatList
                    data={this.props.data.reverse()}
                    renderItem={({item}) => ItemReminder(item,this.props.removeReminder)}
                    keyExtractor={(item,index)=>item.id}
                />
            </View>
        )
    }
}

export default ReminderComponent;