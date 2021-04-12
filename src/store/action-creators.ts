import { Movie } from "../components/MovieCard";
import { Action, ACTION_TYPES } from "./actions";

export const setMoviesData = (movies: Movie[]): Action => {
  return {
    type: ACTION_TYPES.SET_MOVIES,
    payload: movies,
  } as Action;
}

export const deleteMovieById = (id :string): Action => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE,
    payload: id
  }
}

export const loadMovies = () => async (dispatch: (movies: any) => string) => {
  const responseData: { data: any[] } = await (
    await fetch("http://localhost:4000" + "/movies?limit=500")
  ).json();

  dispatch(setMoviesData(responseData.data.map((e) => new Movie(e))));
};
