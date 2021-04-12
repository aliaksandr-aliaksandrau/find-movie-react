import { Movie } from "../components/MovieCard";
import { mockedMovies } from "../components/MovieDashboard/mocked-movies";

export type State = {
  movieList: Movie[];
  searchText: string;
};

export const initialState: State = {
  movieList: [],
  searchText: "",
};