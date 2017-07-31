import firebase from "firebase";

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA2Ybrw7spKPlA_ifaDoiRFB_zNNX6aw0M",
	authDomain: "dansumentors.firebaseapp.com",
	databaseURL: "https://dansumentors.firebaseio.com",
	projectId: "dansumentors",
	storageBucket: "dansumentors.appspot.com",
	messagingSenderId: "264293617297"
};
firebase.initializeApp(config);

export const db = firebase.database();

// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }
