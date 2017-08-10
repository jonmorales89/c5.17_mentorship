import types from './types';
import { db, firebaseAuth } from '../firebase';
import axios from 'axios';

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

export function addMentee(person) {
	db.ref('Mentees').push(person).then(resp => {
		console.log('Data added:', resp.key);
	});
	return {
		type: types.ADD_MENTEE,
		payload: person
	};
}

export function addMentor(person) {
	db.ref('Mentors').push(person).then(resp => {
		console.log('Data added:', resp.key);
	});
	return {
		type: types.ADD_MENTOR,
		payload: person
	};
}

export function authenticate(email, pw) {
	return dispatch => {
		firebaseAuth().createUserWithEmailAndPassword(email, pw).then(() => {
			saveUser;
			dispatch({
				type: types.REGISTER
			});
		});
	};
}

export function logout() {
	return dispatch => {
		firebaseAuth().signOut();
		localStorage.removeItem('token');
		dispatch({
			types: types.LOGOUT
		});
	};
}

export function login({ email, password }) {
	return dispatch => {
		firebaseAuth()
			.signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('action creator signerror', error);
			});
		firebaseAuth().currentUser.getIdToken(true).then(idToken => {
			localStorage.setItem('token', idToken);
			dispatch({
				type: types.LOGIN
			});
		});
	};
}

export function resetPassword(email) {
	return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
	return db.ref
		.child(`users/${user.uid}/info`)
		.set({
			email: user.email,
			uid: user.uid
		})
		.then(() => user);
}
