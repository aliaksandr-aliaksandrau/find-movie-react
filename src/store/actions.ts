import * as Redux from "redux";

// export type ActionTypes = "GET_MOVIES" | "SET_MOVIES";

export interface Action extends Redux.Action {
  type: ACTION_TYPES;
  payload: any;
}

export enum ACTION_TYPES {
  SET_MOVIES = "SET_MOVIES",
  DELETE_MOVIE = "DELETE_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
  CREATE_MOVIE = "CREATE_MOVIE",
}
