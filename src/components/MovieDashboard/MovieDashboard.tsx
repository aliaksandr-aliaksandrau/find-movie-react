import * as React from "react";
import { Movie } from "../MovieCard/movie.model";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieDashboard.scss";

type MovieDashboardProps = {
  movies: Movie[];
  openDeleteMovieForm: Function;
  openEditMovieForm: Function;
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
            key={movie.id}
            movie={movie}
            openEditMovieForm={props.openEditMovieForm}
            openDeleteMovieForm={props.openDeleteMovieForm}
          />
        ))}
      </div>
    );
  }
  return result;
}
