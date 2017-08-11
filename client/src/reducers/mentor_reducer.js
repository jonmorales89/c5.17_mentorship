import types from '../actions/types';
const DEFAULT_STATE = { mentors: {}, allMentors: {}, mentee: {} };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_MENTORS:
			console.log('Get Mentors reducer:', action);
		case types.ADD_MENTOR:
			console.log('Add Mentors reducer:', action);
			return { ...state, mentors: action.payload };
		case types.ADD_MENTEE:
			console.log('Add Mentors reducer:', action);
			return { ...state, mentee: action.payload };
		default:
			return state;
	}
}
