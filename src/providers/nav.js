import { GO_POPULAR } from '../actions/ActionTypes';
import { Route,TabComponent } from '../routes/Route';
import { addNavigationHelpers } from 'react-navigation';

const initialState = TabComponent.router.getStateForAction({routeName:'Home'});

const nav = (state = initialState,action) => {
    return state
}  

export default nav;