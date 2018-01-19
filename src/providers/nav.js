import { GO_POPULAR } from '../actions/ActionTypes';
import { DrawComponent } from '../routes/Route';
import { addNavigationHelpers } from 'react-navigation';

const initialState = DrawComponent.router.getStateForAction(DrawComponent.router.getActionForPathAndParams('Home'));

const nav = (state = initialState,action) => {
    return state
}  

export default nav;