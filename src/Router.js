import React from 'react';
import {Router, Scene, Actions} from "react-native-router-flux";
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import WorkoutCreate from "./components/WorkoutCreate";


const RouterComponent = () => {
    const logOutUser = () => {
      firebase.auth().signOut()
          .then(() => {
              Actions.auth();
          });
    };

  return (
      <Router>
          <Scene key="root" hideNavBar>
              <Scene key="auth" >
                  <Scene key="login" component={LoginForm} title="Login Bro" style={{ backgroundColor: '#4b5045'}}/>
              </Scene>
              <Scene key="main" >
                  <Scene
                      key="workoutList"
                      component={Main}
                      onRight={() => Actions.workoutCreate()}
                      rightTitle="Add Workout"
                      title="Past Workouts"
                      onLeft={() => logOutUser()}
                      leftTitle="Log Out"
                      initial
                  />

                  <Scene key="workoutCreate" component={WorkoutCreate} title="Create Workout"/>
              </Scene>
          </Scene>
      </Router>
  );
};

export default RouterComponent;