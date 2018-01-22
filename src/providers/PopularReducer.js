import {
    LOAD_DATA_POPULAR,
    CHANGE_SHOW_LIST,
    ADD_FAVORITES
} from '../actions/ActionTypes';

const initialState = {
    data: [],
    list: true,
}

const popularReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_POPULAR:
            let arrayFavorites = [];
            let dt = action.loadData
            dt.results.forEach(element => {
                arrayFavorites.push({id:element.id,favorites:false})
            });
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
            alert('ok')
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default popularReducer;