import { applyMiddleware, createStore } from "redux";
import { initialState } from "./initialState";
import { rootReducer } from "./reducers";
import thunkMiddeware from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddeware))
);
