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
    favoriteList: [],
    star: [],
    starList:[],
    check: false
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_POPULAR:
            // var checkStar = [];
            var arrayData = action.loadData.results;
            // var arrayFavorite = state.star;
            // arrayData.forEach(element_1 => {
            //     if (arrayFavorite.indexOf(element_1.id) == -1) {
            //         Object.assign(element_1, { check: false })
            //     } else {
            //         Object.assign(element_1, { check: true })
            //     }
            // });
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
            var getStar = state.star;
            var array = action.favoriteList;
            // array.forEach(element => {
                if (getStar.indexOf(action.object.id) == -1) {
                    getStar.push(action.object.id);
                }
            // });
            // getData.forEach(element => {
            //     if (element.id == action.object.id) {
            //         Object.assign(element, action.object);
            //         if (getStar.indexOf(action.object.id) == -1) {
            //             getStar.push(action.object.id)
            //             getStar1.push({id:action.object.id,checkStar:true})
            //         }
            //     }
            // });
            return {
                ...state,
                star: getStar,
                favoriteList: action.favoriteList,
                check: !state.check
            }
        case GET_FAVORITES:
            var checkStar = [];
            var array = action.list;
            array.forEach(element => {
                checkStar.push(element.id);
            });
            // var checkStar1 = [];
            // var array1 = action.list;
            // array1.forEach(element => {
            //     checkStar1.push({id:element.id,checkStar:true});
            // });
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