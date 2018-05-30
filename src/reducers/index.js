import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NewWorkoutFormReducer from './NewWorkoutFormReducer';

export default combineReducers({
    auth: AuthReducer,
    newWorkoutReducer: NewWorkoutFormReducer
});