import {
    WORKOUT_CHANGED,
    DATE_CHANGED,
    LIFT_CHANGED,
    WORKOUT_CREATE,
    WORKOUT_UPDATE
} from "../actions/types";

const INITIAL_STATE = {
    workout: '',
    date: '',
    lifts: []

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WORKOUT_CHANGED:
            return { ...state, workout: action.payload };
        case DATE_CHANGED:
            return { ...state, date: action.payload };
        case LIFT_CHANGED:
            return { ...state, lifts: action.payload};
        case WORKOUT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload };
        case WORKOUT_CREATE:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};