import { LOAD_PROFILE, EDIT_PROFILE, GO_PROFILE, CHANGE_NAME, CHANGE_SEX, CHANGE_EMAIL, CHANGE_BIRTHDAY, CHANGE_AVATAR } from '../actions/ActionTypes';

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {
                ...state
            }
    }
}

export default profileReducer;