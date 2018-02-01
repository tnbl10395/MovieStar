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
    CHANGE_SEARCH_BUTTON,
    LOAD_DATA_DETAIL,
    LOAD_DATA_CREDIT,
    ADD_REMINDER,
    LOAD_REMINDER,
    REMOVE_REMINDER
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

export const addFavoriteList = (object, favoriteList) => {
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

export const removeFavorite = (object, favoriteList) => {
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

export const loadDataNowPlaying = (loadData) => {
    return {
        type: LOAD_DATA_NOW_PLAYING,
        loadData
    }
}

export const loadDataTopRated = (loadData) => {
    return {
        type: LOAD_DATA_TOP_RATED,
        loadData
    }
}

export const loadDataUpcoming = (loadData) => {
    return {
        type: LOAD_DATA_UPCOMING,
        loadData
    }
}

export const changeSearchButton = () => {
    return {
        type: CHANGE_SEARCH_BUTTON
    }
}

export const loadDataDetail = (loadData) => {
    return {
        type: LOAD_DATA_DETAIL,
        loadData
    }
}

export const loadDataCredit = (loadData) => {
    return {
        type: LOAD_DATA_CREDIT,
        loadData
    }
}

export const addReminder = (reminderList) => {
    return {
        type: ADD_REMINDER,
        reminderList
    }
}

export const loadReminder = (reminderList) => {
    return {
        type: LOAD_REMINDER,
        reminderList
    }
}

export const removeReminder = (object, reminderList) => {
    return {
        type: REMOVE_REMINDER,
        object,
        reminderList
    }
}