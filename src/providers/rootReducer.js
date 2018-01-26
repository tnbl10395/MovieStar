import { combineReducers } from 'redux';
import nav from '../providers/nav';
import popularReducer from '../providers/PopularReducer';

const rootReducer = combineReducers({
    // nav,
    popularReducer
});

export default rootReducer;