import types from '../actions/types';
const DEFAULT_STATE = { allMentors: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_ALL_MENTORS:
			console.log('Get Mentors reducer:', action);
			return { ...state, allMentors: action.payload };
		case types.ADD_PERSON:
			console.log('Add Mentors reducer:', action);
			return { ...state, mentors: action.person };
		default:
			return state;
	}
}
