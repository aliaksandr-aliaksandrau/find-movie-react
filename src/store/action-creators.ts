import { Movie } from "../components/MovieCard";
import { Action, ACTION_TYPES } from "./actions";

export const setMoviesData = (movies: Movie[]): Action => {
  return {
    type: ACTION_TYPES.SET_MOVIES,
    payload: movies,
  };
};

export const deleteMovieById = (id: string): Action => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE,
    payload: id,
  };
};

export const setGenreFilter = (filter: string): Action => {
  return {
    type: ACTION_TYPES.SET_GENRE_FILTER,
    payload: filter,
  };
};

export const setSearchText = (searchText: string): Action => {
  return {
    type: ACTION_TYPES.SET_SEARCH_TEXT,
    payload: searchText,
  };
};

export const setSortingValue = (value: keyof Movie): Action => {
  return {
    type: ACTION_TYPES.SET_SORTING_VALUE,
    payload: value,
  };
};

export const addMovieActionCreator = (movie: Movie): Action => {
  return {
    type: ACTION_TYPES.ADD_MOVIE,
    payload: movie,
  };
};

export const updateMovieActionCreator = (movie: Movie): Action => {
  return {
    type: ACTION_TYPES.UPDATE_MOVIE,
    payload: movie,
  };
};

export const initSortFilterMovies = (): Action => {
  return {
    type: ACTION_TYPES.INIT_SORT_FILTER_MOVIES,
  };
};

export const loadMovies = () => async (dispatch: (movies: any) => string) => {
  const responseData: { data: any[] } = await (
    await fetch("http://localhost:4000" + "/movies?limit=500")
  ).json();

  const movies = responseData.data.map((e) => new Movie(e));

  dispatch(setMoviesData(movies));
  dispatch(initSortFilterMovies());
};
