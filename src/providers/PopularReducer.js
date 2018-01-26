import {
    LOAD_DATA_POPULAR,
    CHANGE_SHOW_LIST,
    ADD_FAVORITES,
    GET_FAVORITES,
    REMOVE_FAVORITE,
    CHANGE_TITLE,
    LOAD_DATA_NOW_PLAYING,
    LOAD_DATA_TOP_RATED,
    LOAD_DATA_UPCOMING,
    CHANGE_SEARCH_BUTTON
} from '../actions/ActionTypes';
import { AsyncStorage } from 'react-native';

const initialState = {
    data: [],
    dataPopular: [],
    dataNowPlaying: [],
    dataTopRated: [],
    dataUpcoming: [],
    list: true,
    favoriteList: [],
    star: [],
    titleList: ["Popular","Now Playing","Top Rated","Upcoming"],
    title:"Popular",
    searchBtn: false
    
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_POPULAR:
            var arrayData = action.loadData.results;
            var arrayFavorite = state.star;
            arrayData.forEach(element_1 => {
                if (arrayFavorite.indexOf(element_1.id) == -1) {
                    // Object.assign(element_1, { check: require('../images/star-outline.png') })
                    Object.assign(element_1, { check: false })
                } else {
                    Object.assign(element_1, { check: true })
                    // Object.assign(element_1, { check: require('../images/star.png') })
                }
            });
            return {
                ...state,
                dataPopular: arrayData,
                data: arrayData,
            }

        case LOAD_DATA_NOW_PLAYING:
            var arrayData = action.loadData.results;
            var arrayFavorite = state.star;
            arrayData.forEach(element_1 => {
                if (arrayFavorite.indexOf(element_1.id) == -1) {
                    // Object.assign(element_1, { check: require('../images/star-outline.png') })
                    Object.assign(element_1, { check: false })
                } else {
                    Object.assign(element_1, { check: true })
                    // Object.assign(element_1, { check: require('../images/star.png') })
                }
            });
            return {
                ...state,
                dataNowPlaying: arrayData,
            }

        case LOAD_DATA_TOP_RATED:
            var arrayData = action.loadData.results;
            var arrayFavorite = state.star;
            arrayData.forEach(element_1 => {
                if (arrayFavorite.indexOf(element_1.id) == -1) {
                    // Object.assign(element_1, { check: require('../images/star-outline.png') })
                    Object.assign(element_1, { check: false })
                } else {
                    Object.assign(element_1, { check: true })
                    // Object.assign(element_1, { check: require('../images/star.png') })
                }
            });
            return {
                ...state,
                dataTopRated: arrayData,
            }

        case LOAD_DATA_UPCOMING:
            var arrayData = action.loadData.results;
            var arrayFavorite = state.star;
            arrayData.forEach(element_1 => {
                if (arrayFavorite.indexOf(element_1.id) == -1) {
                    // Object.assign(element_1, { check: require('../images/star-outline.png') })
                    Object.assign(element_1, { check: false })
                } else {
                    Object.assign(element_1, { check: true })
                    // Object.assign(element_1, { check: require('../images/star.png') })
                }
            });
            return {
                ...state,
                dataUpcoming: arrayData,
            }
            
        case CHANGE_SHOW_LIST:
            return {
                ...state,
                list: !state.list,
            }
        case ADD_FAVORITES:
            var getStar = state.star;
            var getData = state.data;
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
                favoriteList: action.favoriteList,
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
        case CHANGE_TITLE:
            switch (action.title){
                case "Popular":
                    state.title=state.titleList[1];
                    state.data=state.dataNowPlaying;
                    break;
                case "Now Playing":
                    state.title=state.titleList[2];
                    state.data=state.dataTopRated;
                    break;
                case "Top Rated":
                    state.title=state.titleList[3];
                    state.data=state.dataUpcoming;
                    break;
                case "Upcoming":
                    state.title=state.titleList[0];
                    state.data=state.dataPopular;
                    break;
            }
            return {
                ...state,

            }
        case CHANGE_SEARCH_BUTTON:
            return {
                ...state,
                searchBtn: !state.searchBtn
            }
        default:
            return state;
    }
}

export default popularReducer;