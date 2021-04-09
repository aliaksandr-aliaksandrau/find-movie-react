import * as Redux from "redux";

export type ActionTypes = "GET_MOVIES";

export interface Action extends Redux.Action {
  type: ActionTypes;
  payload: any;
}
