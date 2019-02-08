import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var config = {
    apiKey: "AIzaSyBWLB0WqElXMPGht6nnO3-6UxFkYHFpa24",
    authDomain: "oneline-a-day.firebaseapp.com",
    databaseURL: "https://oneline-a-day.firebaseio.com",
    projectId: "oneline-a-day",
    storageBucket: "oneline-a-day.appspot.com",
    messagingSenderId: "702534391335"
}

firebase.initializeApp(config);

const storage = firebase.storage();

var database = firebase.database();

ReactDOM.render(<App storage = {storage} database = {database}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
