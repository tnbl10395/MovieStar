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
    REMOVE_REMINDER,
    LOAD_PROFILE,
    EDIT_PROFILE,
    GO_PROFILE,
    CHANGE_NAME,
    CHANGE_SEX,
    CHANGE_EMAIL,
    CHANGE_BIRTHDAY,
    CHANGE_AVATAR,
    LOAD_DATA_DETAIL_MOVIE,
    LOAD_DATA_DETAIL_FAVORITE,
    LOAD_DATA_CREDIT_MOVIE,
    LOAD_DATA_CREDIT_FAVORITE,
    SEARCH_DATA,
    INPUT_SEARCH,
    CHANGE_SLIDER,
    CHOOSE_YEAR_RELEASE,
    SELECT_SORTING
} from '../actions/ActionTypes';

// movies

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

// detail

export const loadDataDetailMovie = (loadData) => {
    return {
        type: LOAD_DATA_DETAIL_MOVIE,
        loadData
    }
}

export const loadDataDetailFavorite = (loadData) => {
    return {
        type: LOAD_DATA_DETAIL_FAVORITE,
        loadData
    }
}

export const loadDataCreditMovie = (loadData) => {
    return {
        type: LOAD_DATA_CREDIT_MOVIE,
        loadData
    }
}

export const loadDataCreditFavorite = (loadData) => {
    return {
        type: LOAD_DATA_CREDIT_FAVORITE,
        loadData
    }
}

// reminder

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

export const removeReminder = (reminderList) => {
    return {
        type: REMOVE_REMINDER,
        reminderList
    }
}

// profile

export const loadProfile = (loadData) => {
    return {
        type: LOAD_PROFILE,
        loadData
    }
}

export const editProfile = (loadData) => {
    return {
        type: EDIT_PROFILE,
        loadData
    }
}

export const goProfile = () => {
    return {
        type: GO_PROFILE,
    }
}

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        name
    }
}

export const changeBirthday = (birthday) => {
    return {
        type: CHANGE_BIRTHDAY,
        birthday
    }
}

export const changeEmail = (email) => {
    return {
        type: CHANGE_EMAIL,
        email
    }
}

export const changeSex = (sex) => {
    return {
        type: CHANGE_SEX,
        sex
    }
}

export const changeAvatar = (avatar) => {
    return {
        type: CHANGE_AVATAR,
        avatar
    }
}

// favorites

export const addFavoriteList = (object, favoriteList) => {
    return {
        type: ADD_FAVORITES,
        object,
        favoriteList,
    }
}

export const getFavoriteList = (list) => {
    return {
        type: GET_FAVORITES,
        list
    }
}

export const removeFavorite = (object, favoriteList, checkFavorite) => {
    return {
        type: REMOVE_FAVORITE,
        object,
        favoriteList,
        checkFavorite
    }
}

export const changeSearchButton = () => {
    return {
        type: CHANGE_SEARCH_BUTTON
    }
}

export const inputDataSearch = (str) => {
    return {
        type: INPUT_SEARCH,
        str
    }
}

export const searchFavorite = (loadData) => {
    return {
        type: SEARCH_DATA,
        loadData
    }
}

// settings

export const changeSlider = (value) => {
    return {
        type: CHANGE_SLIDER,
        value
    }
}

export const chooseYearRelease = (value) => {
    return {
        type: CHOOSE_YEAR_RELEASE,
        value
    }
}

export const selectSorting = (value) => {
    return {
        type: SELECT_SORTING,
        value
    }
}