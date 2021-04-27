import { Movie } from "../components/MovieCard";

export type State = {
  movieList: Movie[];
  filteredMovies: Movie[];
  searchText: string;
  genreFilter: string;
  sortingValue: keyof Movie;
};

export const initialState: State = {
  movieList: [],
  filteredMovies: [],
  searchText: "",
  genreFilter: "",
  sortingValue: null,
};
