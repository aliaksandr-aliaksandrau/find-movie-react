import { Movie } from "../components/MovieCard";
import { Action, ACTION_TYPES } from "./actions";
import { initialState, State } from "./initialState";

export const rootReducer = function (
  state: State = initialState,
  action: Action
): State {
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

    case ACTION_TYPES.SET_GENRE_FILTER: {
      return { ...state, genreFilter: action.payload };
    }

    case ACTION_TYPES.SET_SEARCH_TEXT: {
      return { ...state, searchText: action.payload };
    }

    case ACTION_TYPES.INIT_SORT_FILTER_MOVIES: {
      const genreFilter = state.genreFilter;
      const searchText = state.searchText;

      let filteredMovies = state.movieList;

      if (genreFilter) {
        filteredMovies = genreFilter
          ? state.movieList.filter((movie) =>
              movie.genres.some((genre) => genre === genreFilter)
            )
          : state.movieList;
      }

      if (searchText) {
        filteredMovies = filteredMovies.filter((e: Movie) =>
          e.title.toLocaleLowerCase().match(searchText.toLowerCase())
        );
      }

      filteredMovies = filteredMovies.slice(0, 9);

      return { ...state, filteredMovies: filteredMovies };
    }

    default:
      return state;
  }
};
