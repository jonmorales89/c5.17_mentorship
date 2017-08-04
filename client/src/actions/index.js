import types from './types';
import { db, auth } from '../firebase';

export function getMentors(snapshot) {
	return {
		type: types.GET_MENTORS,
		payload: snapshot
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


