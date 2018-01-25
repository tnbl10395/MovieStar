import {
    LOAD_DATA_POPULAR,
    CHANGE_SHOW_LIST,
    ADD_FAVORITES,
    GET_FAVORITES,
    REMOVE_FAVORITE
} from '../actions/ActionTypes';
import { AsyncStorage } from 'react-native';

const initialState = {
    data: [],
    list: true,
    favoriteList: [],
    star: []
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_POPULAR:
            var checkStar = [];
            var arrayData = action.loadData.results;
            var arrayFavorite = state.star;
            arrayData.forEach(element_1 => {
                if (arrayFavorite.indexOf(element_1.id) == -1) {
                    Object.assign(element_1, { check: require('../images/star-outline.png') })
                } else {
                    Object.assign(element_1, { check: require('../images/star.png') })
                }
            });
            return {
                ...state,
                data: arrayData,
            }
        case CHANGE_SHOW_LIST:
            return {
                ...state,
                list: !state.list,
            }
        case ADD_FAVORITES:
            var getData = state.data;
            var getStar = state.star;
            getData.forEach(element => {
                if (element.id == action.object.id) {
                    Object.assign(element, action.object);
                    if (getStar.indexOf(action.object.id) == -1) {
                        getStar.push(action.object.id)
                    }
                }
            });
            return {
                ...state,
                data: getData,
                star: getStar,
                favoriteList: action.favoriteList
            }
        case REMOVE_FAVORITE:
            var getData = state.data;
            var getStar = state.star;
            getData.forEach(element => {
                if (element.id == action.object.id) {
                    Object.assign(element, action.object);
                    var index = getStar.indexOf(action.object.id);
                    if (index != -1) {
                        getStar.splice(action.object.id,1)
                    }
                }
            });
            return {
                ...state,
                data: getData,
                star: getStar,
                favoriteList: action.favoriteList
            }
        case GET_FAVORITES:
            var checkStar = [];
            var array = action.list;
            array.forEach(element => {
                checkStar.push(element.id);
            });
            return {
                ...state,
                favoriteList: action.list,
                star: checkStar,
            }
        default:
            return state;
    }
}

export default popularReducer;