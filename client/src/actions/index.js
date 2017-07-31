import types from "./types";
import { db } from "../firebase";

export function getMentors(snapshot) {
    return {
        type: types.GET_MENTORS,
        payload: snapshot
    };
}
