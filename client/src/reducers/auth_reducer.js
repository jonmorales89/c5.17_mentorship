import types from '../actions/types';

const DEFAULT_STATE = { authorized: false, msg: null, uid: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.REGISTER:
			return { ...state, msg: action.payload };
		case types.LOGIN_SUCCESS:
			return {
				...state,
				authorized: true,
				username: action.username,
				uid: action.uid ? action.uid : null,
				error: null
			};
		case types.AUTH_ERROR:
			return { ...state, error: action.payload };
		case types.LOGOUT_SUCCESS:
			return { ...DEFAULT_STATE };
		default:
			return state;
	}
}
