import { combineReducers } from "redux";
import mentorReducer from "./mentor_reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
	list: mentorReducer,
	form: formReducer
});
