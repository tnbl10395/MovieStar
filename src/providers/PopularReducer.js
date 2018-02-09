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
    GO_PROFILE,
    CHANGE_NAME,
    CHANGE_SEX,
    CHANGE_EMAIL,
    CHANGE_BIRTHDAY,
    CHANGE_AVATAR,
    EDIT_PROFILE
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
    amountFavorite: 0,
    statusFavorite: false,
    star: [],
    titleList: ["Popular", "Now Playing", "Top Rated", "Upcoming"],
    title: "Popular",
    searchBtn: false,
    detail: [],
    credit: [],
    reminder: [],
    profile: {
        avatar: '',
        name: '',
        birthday: '',
        email: '',
        sex: true,
    },
    avatar: '',
    goProfile: false,
    name: '',
    birthday: '',
    email: '',
    sex: true,
    o: {a:'ahihi'},
    a:[
        {c:1,d:2},
        {c:5,d:6},
    ]
}

const popularReducer = (state = initialState, action) => {
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
            Object.assign(getData, action.object)
            // getData.forEach(element => {
            //     if (element.id == action.object.id) {
            //         Object.assign(element, { check: 1 });
            Object.assign(state.a,{c:1,d:5})
            state.o.a = 'ahihihihihi'
             if (getStar.indexOf(action.object.id) == -1) {
                getStar.push(action.object.id)
            }
            // }
            // });
            return {
                ...state,
                favoriteList: action.favoriteList,
                data: getData,
                star: getStar,
                amountFavorite: action.favoriteList.length,
            }

        case REMOVE_FAVORITE:
            var getData = state.data;
            var getStar = state.star;
            // getData.forEach(element => {
            //     if (element.id == action.object.id) {
            Object.assign(getData, action.object);
            var index = getStar.indexOf(action.object.id);
            if (index != -1) {
                getStar.splice(action.object.id, 1)
            }
            // }
            // });
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
            // if (action.list.length > 0) {
            //     state.statusFavorite = true
            // }
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
                    break;
                case "Now Playing":
                    state.title = state.titleList[2];
                    state.data = state.dataTopRated;
                    break;
                case "Top Rated":
                    state.title = state.titleList[3];
                    state.data = state.dataUpcoming;
                    break;
                case "Upcoming":
                    state.title = state.titleList[0];
                    state.data = state.dataPopular;
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

        case LOAD_DATA_DETAIL:
            return {
                ...state,
                detail: action.loadData
            }

        case LOAD_DATA_CREDIT:
            return {
                ...state,
                credit: action.loadData
            }

        case ADD_REMINDER:
            return {
                ...state,
                reminder: action.reminderList
            }

        case LOAD_REMINDER:
            return {
                ...state,
                reminder: action.reminderList
            }

        case REMOVE_REMINDER:
            return {
                ...state,
                reminder: action.reminderList
            }

        case LOAD_PROFILE:
            if (action.loadData == null) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    profile: action.loadData,
                }
            }


        case EDIT_PROFILE:
            return {
                ...state,
                profile: action.loadData,
            }

        case GO_PROFILE:
            return {
                ...state,
                goProfile: !state.goProfile,
                avatar: state.profile.avatar,
                name: state.profile.name,
                birthday: state.profile.birthday,
                email: state.profile.email,
                sex: state.profile.sex
            }

        case CHANGE_NAME:
            return {
                ...state,
                name: action.name

            }

        case CHANGE_SEX:
            return {
                ...state,
                sex: action.sex

            }

        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.email

            }

        case CHANGE_BIRTHDAY:
            return {
                ...state,
                birthday: action.birthday

            }

        case CHANGE_AVATAR:
            return {
                ...state,
                avatar: action.avatar

            }

        default:
            return state;
    }
}

export default popularReducer;