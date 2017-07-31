import { combineReducers } from "redux";
import mentorReducer from "./mentor_reducer";

export default combineReducers({
	list: mentorReducer
});
