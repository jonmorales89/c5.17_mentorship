import types from './types';
import { db, firebaseAuth } from '../firebase';

export function getAllMentors() {
	return dispatch => {
		db.ref('Mentors').on('value', snapshot => {
			const data = snapshot.val();
			dispatch({
				type: types.GET_ALL_MENTORS,
				payload: data
			});
		});
	};
}

export function addPerson(person) {
	db.ref('Mentors').push(person).then(resp => {
		console.log('Data added:', resp.key);
	});
	return {
		type: types.ADD_PERSON,
		payload: person
	};
}

export function authenticate(email, pw) {
	return firebaseAuth()
		.createUserWithEmailAndPassword(email, pw)
		.then(saveUser);
}

export function logout() {
	return firebaseAuth().signOut();
}

export function login({ email, pw }) {
	return firebaseAuth().signInWithEmailAndPassword(email, pw);
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
