import { Action } from "./actions";
import { initialState, State } from "./initialState";

export const rootReducer = function (state: State = initialState, action: Action) {
  switch (action.type) {
    case "GET_MOVIES": {
    }

    default:
      return state;
  }
};
