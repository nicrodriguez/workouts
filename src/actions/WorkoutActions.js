import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    WORKOUT_CREATE
} from './types';

export const workoutCreate = ({ workout, date, lifts }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/workouts`)
          .push({ workout, date, lifts })
          .then(() => {
             dispatch({ type: WORKOUT_CREATE });
             Actions.pop();
          });
  }
};