import { 
    LOAD_DATA_POPULAR, 
    CHANGE_SHOW_LIST, 
    ADD_FAVORITES, 
    GET_FAVORITES,
    REMOVE_FAVORITE,
    CHANGE_TITLE
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

export const addFavoriteList = (object,favoriteList) => {
    return {
        type: ADD_FAVORITES,
        object,
        favoriteList
    }
}

export const getFavoriteList = (list) => {
    return {
        type: GET_FAVORITES,
        list
    }
}

export const removeFavorite = (object,favoriteList) => {
    return {
        type: REMOVE_FAVORITE,
        object,
        favoriteList
    }
}

export const changeTitles = (title) => {
    return {
        type: CHANGE_TITLE,
        title
    }
}