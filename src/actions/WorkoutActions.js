import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    WORKOUT_CHANGED,
    DATE_CHANGED,
    LIFT_CHANGED,
    WORKOUT_UPDATE,
    WORKOUT_CREATE
} from './types';

export const workoutChanged = (text) => {
    text = text.replace("/", "_");
    return {
        type: WORKOUT_CHANGED,
        payload: text
    };
};

export const dateChanged = (text) => {
    text = text.replace("/", "_");
    return {
        type: DATE_CHANGED,
        payload: text
    };
};

export const liftChanged = (lifts) => {
    return {
      type: LIFT_CHANGED,
      payload: lifts
    };
};

export const workoutUpdate = ({ prop, value }) => {
    return {
        type: WORKOUT_UPDATE,
        payload: { prop, value }
    };
};

export const workoutCreate = ({ workout, date, lifts }) => {
    const { currentUser } = firebase.auth();


    return (dispatch) => {
        if(lifts !== undefined) {
            for (let i = 0; i < lifts.length; i++) {
                console.log("Lift" + i + "saved");
                const {key, sets, reps} = lifts[i];
                firebase.database().ref(`/users/${currentUser.uid}/${workout} ${date}`)
                    .push({key, sets, reps})
                    .then(() => {
                        dispatch({type: WORKOUT_CREATE});
                        Actions.main();
                    });
            }
        }
    }
};