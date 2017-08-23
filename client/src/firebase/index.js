import firebase from 'firebase';
var config = require('./config.js');

// Initialize Firebase

firebase.initializeApp(config);

export const db = firebase.database();

export const auth = firebase.auth();
