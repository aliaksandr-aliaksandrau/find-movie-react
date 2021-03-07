import * as React from "react";
import { Movie } from "../MovieCard/movie.model";
import MovieCard from "../MovieCard/MovieCard";
import { mockedMovies } from "./mocked-movies";

import "./MovieDashboard.scss";

export default function MovieDashboard() {
  const movies = mockedMovies.map((e) => new Movie(e));
  return (
    <div className="MovieDashboard">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          releaseDate={movie.releaseDate ? movie.releaseDate.split("-")[0] : ""}
          posterPath={movie.posterPath}
          description={movie.genres.join(", ")}
          key={movie.id}
        />
      ))}
    </div>
  );
}
