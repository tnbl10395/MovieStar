import {
    LOAD_DATA_POPULAR,
    LOAD_DATA_NOW_PLAYING,
    LOAD_DATA_TOP_RATED,
    LOAD_DATA_UPCOMING,
    CHANGE_SHOW_LIST,
    ADD_FAVORITES,
    REMOVE_FAVORITE,
    GET_FAVORITES,
    CHANGE_TITLE,
    CHANGE_SEARCH_BUTTON,
    SEARCH_DATA,
    CHANGE_SLIDER,
    CHOOSE_YEAR_RELEASE,
    SELECT_SORTING
} from '../actions/ActionTypes';

const number = 0;

const initialState = {
    //state for MoviesComponent
    data: [],
    dataPopular: [],
    dataNowPlaying: [],
    dataTopRated: [],
    dataUpcoming: [],
    list: true,
    titleList: ["Popular", "Now Playing", "Top Rated", "Upcoming"],
    title: "Popular",
    //state for FavoriteComponent
    favoriteList: [],
    amountFavorite: 0,
    statusFavorite: false,
    star: [],
    searchBtn: false,
    //state for SettingComponent
    checkPopular: true,
    checkTopRated: false,
    checkUpcoming: false,
    checkNowPlaying: false,
    checkReleaseDate: false,
    checkRating: false,
    valueSlider: number.toPrecision(2),
    valueYearRelease: '1970' 
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_POPULAR:
            var arrayData = action.loadData.results;
            var arrayFavorite = state.star;
            arrayData.forEach(element_1 => {
                if (arrayFavorite.indexOf(element_1.id) == -1) {
                    Object.assign(element_1, { check: 0 })
                } else {
                    Object.assign(element_1, { check: 1 })
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
                    Object.assign(element_1, { check: 0 })
                } else {
                    Object.assign(element_1, { check: 1 })
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
                    Object.assign(element_1, { check: 0 })
                } else {
                    Object.assign(element_1, { check: 1 })
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
                    Object.assign(element_1, { check: 0 })
                } else {
                    Object.assign(element_1, { check: 1 })
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
                }
            });
            if (getStar.indexOf(action.object.id) == -1) {
                getStar.push(action.object.id)
            }
            return {
                ...state,
                favoriteList: action.favoriteList,
                data: getData,
                star: getStar,
                amountFavorite: action.favoriteList.length,
            }
        case REMOVE_FAVORITE:
            var getStar = state.star;
            if (action.checkFavorite == 0) {
                var getData = state.data;
                getData.forEach(element => {
                    if (element.id == action.object.id) {
                        Object.assign(element, action.object);
                    }
                });
            } else {
                var getData = [];
            }
            if (getStar.indexOf(action.object.id) != -1) {
                getStar.splice(getStar.indexOf(action.object.id), 1);
            }
            return {
                ...state,
                favoriteList: action.favoriteList,
                data: getData,
                star: getStar,
                amountFavorite: action.favoriteList.length
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
                amountFavorite: action.list.length
            }
        case CHANGE_TITLE:
            switch (action.title) {
                case "Popular":
                    state.title = state.titleList[1];
                    state.data = state.dataNowPlaying;
                    state.checkPopular = false;
                    state.checkTopRated = false;
                    state.checkUpcoming = false;
                    state.checkNowPlaying = true;
                    break;
                case "Now Playing":
                    state.title = state.titleList[2];
                    state.data = state.dataTopRated;
                    state.checkPopular = false;
                    state.checkTopRated = true;
                    state.checkUpcoming = false;
                    state.checkNowPlaying = false;
                    break;
                case "Top Rated":
                    state.title = state.titleList[3];
                    state.data = state.dataUpcoming;
                    state.checkPopular = false;
                    state.checkTopRated = false;
                    state.checkUpcoming = true;
                    state.checkNowPlaying = false;
                    break;
                case "Upcoming":
                    state.title = state.titleList[0];
                    state.data = state.dataPopular;
                    state.checkPopular = true;
                    state.checkTopRated = false;
                    state.checkUpcoming = false;
                    state.checkNowPlaying = false;
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
        case SEARCH_DATA:
            return {
                ...state,
                favoriteList: action.loadData
            }
        case CHANGE_SLIDER:
            let newData = [];
            if (action.value < 1 && action.value > 0) {
                state.valueSlider = action.value.toPrecision(1);
            } else {
                state.valueSlider = action.value.toPrecision(2)
            }
            state.data.forEach(element => {
                if(element.vote_average >= state.valueSlider){
                    newData.push(element);
                }
            });
            return {
                ...state,
                data: newData,
            }
        case CHOOSE_YEAR_RELEASE:
            return {
                ...state,
                valueYearRelease: action.value
            }
        case SELECT_SORTING:
            if(action.value=='ReleaseDate'){
                state.checkReleaseDate = true;
                state.checkRating = false;
            }else if(action.value=='Rating'){
                state.checkReleaseDate = false;
                state.checkRating = true;
            }
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default dataReducer;