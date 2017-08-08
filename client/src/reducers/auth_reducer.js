import types from '../actions/types';

const DEFAULT_STATE = { authorized: false, msg: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.REGISTER:
		case types.LOGIN:
			return { ...state, authorized: true };
		case types.LOGOUT:
			return { ...DEFAULT_STATE };
		default:
			return state;
	}
}
