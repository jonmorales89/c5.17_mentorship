import types from './types';
import { db, auth } from '../firebase/index';
import firebase from 'firebase';
import axios from 'axios';

// Get all mentors from database, set into redux state
export function getAllMentors() {
	return dispatch => {
		db.ref('Mentors').on('value', snapshot => {
			const data = snapshot.val();
			dispatch({
				type: types.GET_MENTORS,
				payload: data
			});
		});
	};
}

// Adds results from mentor_signup_form to database
export function addPerson(person) {
	db.ref('Mentors').push(person).then(resp => {
		console.log('Data added:', resp.key);
	});
	return {
		type: types.ADD_PERSON,
		payload: person
	};
}

// Beginning of authenticating different providers
function authenticate(provider) {
	return dispatch => {
		auth
			.signInWithPopup(provider)
			.then(result => {
				console.log('signing in provider result', result);
				dispatch(loginSuccess(result));
			})
			.catch(error => dispatch(loginError(error)));
	};
}

// Catches and returns errors from login
export function loginError(error) {
	return {
		type: types.LOGIN_ERROR,
		payload: error
	};
}

// Catches and returns login success results
export function loginSuccess(result) {
	return {
		type: types.LOGIN_SUCCESS,
		payload: result.user
	};
}

// Creates a user via firebase only authenticator
export function createAccount(email, pw) {
	return dispatch => {
		auth()
			.createUserWithEmailAndPassword(email, pw)
			.then(resp => {
				console.log('user created successful!');
				dispatch({
					type: types.REGISTER
				});
			})
			.catch(error => {
				console.log('error creating user', error);
			});
	};
}

export function login({ email, password }) {
	return dispatch => {
		auth.signInWithEmailAndPassword(email, password).catch(error => {
			console.log('action creator signerror', error);
		});
		auth.currentUser.getIdToken(true).then(idToken => {
			localStorage.setItem('token', idToken);
			dispatch({
				type: types.LOGIN
			});
		});
	};
}

export function loginWithFacebook() {
	const provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('public_profile');
	return authenticate(provider);
}

// export function signInWithGoogle() {
// 	return authenticate(new firebase.auth.GoogleAuthProvider());
// }

// export function signInWithGithub() {
//   return authenticate(new firebase.auth.GithubAuthProvider());
// }

export function resetPassword(email) {
	return auth().sendPasswordResetEmail(email);
}

// Logs user out from firebase
export function logout() {
	return dispatch => {
		auth.signOut().then(() => dispatch(signOutSuccess()));
	};
}

// Returns action of logout success
export function logoutSuccess() {
	return {
		type: types.LOGOUT_SUCCESS
	};
}
