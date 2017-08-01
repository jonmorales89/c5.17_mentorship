import types from '../actions/types';
const DEFAULT_STATE = { mentors: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_MENTORS:
			console.log('Get Mentors reducer:', action);
			return {...state, mentors: action.payload};
		default:
			return state;
	}
}
