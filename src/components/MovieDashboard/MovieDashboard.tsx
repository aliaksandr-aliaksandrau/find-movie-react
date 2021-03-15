import * as React from "react";
import { Movie } from "../MovieCard/movie.model";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieDashboard.scss";

type MovieDashboardProps = {
  movies: Movie[];
};

export default function MovieDashboard(props: MovieDashboardProps) {
  const movies = props.movies;

  let result;

  if (movies && Array.isArray(movies) && movies.length === 0) {
    result = <div className="MovieDashboard__not-found">No Movie Found</div>;
  } else {
    result = (
      <div className="MovieDashboard__movies-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            releaseDate={
              movie.releaseDate ? movie.releaseDate.split("-")[0] : ""
            }
            posterPath={movie.posterPath}
            description={movie.genres.join(", ")}
            key={movie.id}
          />
        ))}
      </div>
    );
  }
  return result;
}
