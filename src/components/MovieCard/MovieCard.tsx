import * as React from "react";
import { Movie } from "./movie.model";

import "./MovieCard.scss";

export default function MovieCard(movie: Movie) {
  return (
    <div className="MovieCard">
      <img
        className="MovieCard__image"
        src={movie.posterPath}
        alt="film-logo"
      ></img>

      <div className="MovieCard__info">
        <div className="MovieCard__title">{movie.title}</div>
        <div className="MovieCard__year">{movie.releaseDate}</div>
      </div>
      <div className="MovieCard__description">{movie.description}</div>
    </div>
  );
}

MovieCard.defaultProps = {
  title: "Some new movie...",
  description: "Some description",
  year: 0,
  genre: "",
};
