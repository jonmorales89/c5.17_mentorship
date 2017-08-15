import types from '../actions/types';

const DEFAULT_STATE = { authorized: false, msg: null, uid: null };

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.REGISTER:
			console.log('registering action', action);
			return { ...state, msg: action.payload };
		case types.LOGIN_SUCCESS:
			console.log('action/user from login success', action);
			return {
				...state,
				authorized: true,
				id: action.payload ? action.payload.uid : null
			};
		case types.LOGIN_ERROR:
			console.log('action from login error', action);
			return { ...DEFAULT_STATE };
		case types.LOGOUT_SUCCESS:
			return { ...DEFAULT_STATE };
		default:
			return state;
	}
}
