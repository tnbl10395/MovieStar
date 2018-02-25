import { ADD_REMINDER, LOAD_REMINDER, REMOVE_REMINDER } from '../actions/ActionTypes';

const initialState = {
    reminder: [],
}

const reminderReducer = (state=initialState,action) => {
    switch (action.type) {
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
    
        default:
            return {
                ...state
            }
    }
}

export default reminderReducer;