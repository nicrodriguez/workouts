import React, { Component } from 'react';
import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from "./Router";
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCyVeQzhJO7VWVft5bbFEx1rlV5tk7_le0",
            authDomain: "workoutapp-d0ab4.firebaseapp.com",
            databaseURL: "https://workoutapp-d0ab4.firebaseio.com",
            projectId: "workoutapp-d0ab4",
            storageBucket: "workoutapp-d0ab4.appspot.com",
            messagingSenderId: "305866649699"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}



export default App;