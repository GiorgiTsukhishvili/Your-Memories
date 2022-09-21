import { createStore } from "redux";
import postReducer from "../reducers/postReducers";

export const store = createStore(postReducer);
