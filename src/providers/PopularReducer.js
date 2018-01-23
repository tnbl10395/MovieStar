import {
    LOAD_DATA_POPULAR,
    CHANGE_SHOW_LIST,
    ADD_FAVORITES,
    GET_FAVORITES
} from '../actions/ActionTypes';
import { AsyncStorage } from 'react-native';

const initialState = {
    data: [],
    list: true,
    favoriteList:[],
    star: []
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_POPULAR:
            return {
                ...state,
                data: action.loadData,
            }
        case CHANGE_SHOW_LIST:
            return {
                ...state,
                list: !state.list,
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favoriteList: state.favoriteList
            }
        case GET_FAVORITES:
            return {
                ...state,
                favoriteList: action.list,
            }
        default:
            return state;
    }
}

export default popularReducer;