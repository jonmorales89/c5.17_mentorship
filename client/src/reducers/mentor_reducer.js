import types from '../actions/types';
const DEFAULT_STATE = { mentors: [] };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.GET_MENTORS:
			return state;
		default:
			return state;
	}
}
