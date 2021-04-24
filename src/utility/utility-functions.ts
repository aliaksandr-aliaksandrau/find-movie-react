import { Movie } from "../components/MovieCard";

export function sortingMoviesByDate(a: Movie, b: Movie) {
  const dateA = new Date(a.releaseDate).getTime();
  const dateB = new Date(b.releaseDate).getTime();
  return dateB - dateA;
}
