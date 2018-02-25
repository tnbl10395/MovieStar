import React, { Component } from 'react';
import { DetailMovie } from '../templates/DetailMovie';
import { CreditMovie } from '../templates/CreditMovie';
import { HeaderDetailFavorite } from '../templates/HeaderDetail';
import { View, Text, Alert, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

class DetailFavoritesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
        };
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (fulldate) => {
        var d = new Date(fulldate);
        var data = this.props.dataDetail;
        var month = d.getMonth() + 1;
        var date = d.getFullYear() + '-' + month + '-' + d.getDate();
        var time = d.getHours() + ':' + d.getMinutes();
        var str = data.title + ' - ' + time + ' - ' + data.vote_average + '/10.0';
        var obj = {
            id: data.id,
            title: data.title,
            vote_average: data.vote_average,
            date: date,
            time: time,
            poster_path: data.poster_path,
            fulldate: fulldate
        }
        Alert.alert(
            'Reminder',
            str,
            [
                { text: 'OK', onPress: () => this.props.addReminder(obj) }
            ]
        )
        this._hideDateTimePicker();
    };

    componentWillMount() {
        this.props.loadDetail(this.props.navigation.state.params.name.id);
        this.props.loadCredit(this.props.navigation.state.params.name.id);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderDetailFavorite navigation={this.props.navigation} title={this.props.dataDetail.title} />
                <DetailMovie detail={this.props.dataDetail} item={this.props.navigation.state.params.name} onPress={this._showDateTimePicker} />
                <CreditMovie credit={this.props.dataCredit.cast} />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='datetime'
                    is24Hour={false}
                    datePickerModeAndroid='spinner'
                />
            </View>
        );
    }
}

export default DetailFavoritesComponent;