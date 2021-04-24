import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../../components/MovieCard";
import { mockedMovies } from "../../components/MovieDashboard/mocked-movies";
import { State } from "../../store/initialState";

export function useLoadMovieById(movieId: string) {
  useEffect(() => {
    console.log("Modal Form: Load movie by Id: ", movieId);
    return () => console.log("Modal Form: unsubscribe movie loading");
  }, [movieId]);
}

export function useLoadFilteredMovies(
  searchText: string,
  genreFilter: string
): Movie[] {

  const movieList: Movie[] = [];
  const [movies, setMovies] = useState(movieList.slice(0, 9));

  useEffect((): any => {
    let filteredMovies = movieList;

    if (genreFilter) {
      filteredMovies = filteredMovies.filter((movie: Movie) =>
        genreFilter === ""
          ? true
          : movie.genres.some((genre) => genre === genreFilter)
      );
    }

    if (searchText) {
      filteredMovies = filteredMovies.filter((e: Movie) =>
        e.title.match(searchText)
      );
    }
    setMovies(filteredMovies.slice(0, 9));
  }, [searchText, genreFilter]);

  return movies;
}
