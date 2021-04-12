import { Action, ACTION_TYPES } from "./actions";
import { initialState, State } from "./initialState";

export const rootReducer = function (
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case ACTION_TYPES.SET_MOVIES: {
      return { ...state, movieList: action.payload };
    }

    case ACTION_TYPES.DELETE_MOVIE: {
      const updatedList = state.movieList.filter(
        (e) => e.id !== action.payload
      );
      return { ...state, movieList: updatedList };
    }

    default:
      return state;
  }
};
