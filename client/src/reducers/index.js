import { combineReducers } from 'redux';
import mentorReducer from './mentor_reducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';

export default combineReducers({
	mentors: mentorReducer,
	form: formReducer,
	auth: authReducer
});
