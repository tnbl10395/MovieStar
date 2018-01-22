import { 
    LOAD_DATA_POPULAR, 
    CHANGE_SHOW_LIST, 
    ADD_FAVORITES 
} from '../actions/ActionTypes';

export const loadDataPopular = (loadData) => {
    return {
        type: LOAD_DATA_POPULAR,
        loadData
    }  
} 

export const changeShowListPopular = () => {
    return {
        type: CHANGE_SHOW_LIST
    }
}

export const addFavoriteList = () => {
    return {
        type: ADD_FAVORITES
    }
}