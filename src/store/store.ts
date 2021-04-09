import { createStore } from "redux";
import { initialState } from "./initialState";
import { rootReducer } from "./reducers";

export default createStore(rootReducer, initialState);
