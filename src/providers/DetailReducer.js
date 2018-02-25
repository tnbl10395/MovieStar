import { 
    LOAD_DATA_DETAIL_MOVIE, 
    LOAD_DATA_DETAIL_FAVORITE, 
    LOAD_DATA_CREDIT_MOVIE, 
    LOAD_DATA_CREDIT_FAVORITE 
} from '../actions/ActionTypes';

const initialState = {
    detailMovie: [],
    detailFavorite: [],
    creditMovie: [],
    creditFavorite: [],
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_DETAIL_MOVIE:
            return {
                ...state,
                detailMovie: action.loadData
            }

        case LOAD_DATA_DETAIL_FAVORITE:
            return {
                ...state,
                detailFavorite: action.loadData
            }

        case LOAD_DATA_CREDIT_MOVIE:
            return {
                ...state,
                creditMovie: action.loadData
            }

        case LOAD_DATA_CREDIT_FAVORITE:
            return {
                ...state,
                creditFavorite: action.loadData
            }

        default:
            return {
                ...state
            }
    }
}

export default detailReducer;