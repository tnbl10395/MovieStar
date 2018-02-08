import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Avatar from '../containers/AvatarContainer';
import DoneButton from '../containers/DoneButtonContainer';
import { CancelButton } from '../templates/CancelButton';
import DateTimePicker from 'react-native-modal-datetime-picker';

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
        };
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (fulldate) => {
        var d = new Date(fulldate);
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var birthday = year + '-' + day + '-' + month;
        this.props.changeBirthday(birthday)
        this._hideDateTimePicker();
    };

    render() {
        return (
            <View style={{ top: '3%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                    <CancelButton navigation={this.props.navigation} goHome={this.props.goHome} />
                    <DoneButton navigation={this.props.navigation}/>
                </View>
                <Avatar showDate={this._showDateTimePicker}
                    status={this.props.status}
                    data={this.props.data} />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='date'
                />
            </View>
        );
    }
}

export default ProfileComponent;