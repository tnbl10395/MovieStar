import {
    LOAD_DATA_POPULAR,
    CHANGE_SHOW_LIST,
    ADD_FAVORITES
} from '../actions/ActionTypes';

const initialState = {
    data: [],
    list: true,
    favorites: false,
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
                favorites:!state.favorites
            }
        default:
            return state;
    }
}

export default popularReducer;