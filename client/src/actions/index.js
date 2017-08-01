import types from './types';
import { db } from '../firebase';

export function getMentors(snapshot) {
	return {
		type: types.GET_MENTORS,
		payload: snapshot
	};
}

export function addPerson(person) {
	const newPerson = {
		email: person.email
	};

	db.ref('Mentors').push(newPerson);

	return {
		type: types.ADD_PERSON
	};
}
