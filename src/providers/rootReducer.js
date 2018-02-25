import { combineReducers } from 'redux';
import dataReducer from '../providers/DataReducer';
import profileReducer from '../providers/ProfileReducer';
import reminderReducer from '../providers/ReminderReducer';
import detailReducer from '../providers/DetailReducer';

const rootReducer = combineReducers({
    detailReducer,
    reminderReducer,
    profileReducer,
    dataReducer
});

export default rootReducer;