import * as Redux from "redux";
export interface Action extends Redux.Action {
  type: ACTION_TYPES;
  payload?: any;
}

export enum ACTION_TYPES {
  SET_MOVIES = "SET_MOVIES",
  DELETE_MOVIE = "DELETE_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
  CREATE_MOVIE = "CREATE_MOVIE",
  SET_SEARCH_TEXT = "SET_SEARCH_TEXT",
  SET_GENRE_FILTER = "SET_GENRE_FILTER",
  INIT_SORT_FILTER_MOVIES = "INIT_SORT_FILTER_MOVIES",
}
