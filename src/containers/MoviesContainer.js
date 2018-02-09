import React from 'react';
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import MoviesComponent from '../components/MoviesComponent';
import { getPopular, getNowPlaying, getTopRated, getUpcoming } from '../api/api';
import { loadDataPopular, addFavoriteList, loadDataNowPlaying, loadDataTopRated, loadDataUpcoming, loadProfile, loadReminder } from '../actions/PopularActions';
import { getAllReminder } from '../localDatabase/localdatabase';

async function getProfile(dispatch,loadProfile) {
    try {
        var value = await AsyncStorage.getItem('profile');
        dispatch(loadProfile(JSON.parse(value)));
    } catch (error) {
        alert(JSON.stringify(error))
    }
}

const mapStateToProps = (state) => ({
    data: state.popularReducer.data,
    data1: state.popularReducer.a,
    data2: state.popularReducer.o,
    list: state.popularReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
    loadPopular: () => {
        getPopular(dispatch, loadDataPopular);
    },
    loadNowPlaying: () => {
        getNowPlaying(dispatch, loadDataNowPlaying);
    },
    loadTopRated: () => {
        getTopRated(dispatch, loadDataTopRated);
    },
    loadUpcoming: () => {
        getUpcoming(dispatch, loadDataUpcoming);
    },
    loadProfile: () => {
        getProfile(dispatch,loadProfile)
    },
    loadReminder: () => {
        getAllReminder(dispatch,loadReminder);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);