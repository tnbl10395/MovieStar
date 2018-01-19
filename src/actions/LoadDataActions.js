import { LOAD_DATA_POPULAR } from '../actions/ActionTypes';

export const loadDataPopular = (data) => {
    return {
        type: LOAD_DATA_POPULAR,
        data
    }  
} 