import * as React from "react";
import { Movie } from "./movie.model";

import "./MovieCard.scss";

export default function MovieCard(props: {
  movie: Movie;
  openDeleteMovieForm: Function;
  openEditMovieForm: Function;
  setSelectedMovie: Function;
}) {
  const setSelectedMovie: any = () => {
    props.setSelectedMovie(props.movie);
  };

  return (
    <div className="MovieCard">
      {/* <div className="MovieCard_three-dot-menu"></div> */}
      <img
        onClick={setSelectedMovie}
        className="MovieCard__image"
        src={props.movie.posterPath}
        alt="film-logo"
      ></img>

      <div className="MovieCard__info">
        <div className="MovieCard__title">{props.movie.title}</div>
        <div className="MovieCard__year">{props.movie.releaseYear}</div>
      </div>
      <div className="MovieCard__description">{props.movie.description}</div>
      <button onClick={props.openEditMovieForm as any}>EDIT</button>
      <button onClick={props.openDeleteMovieForm as any}>DELETE</button>
    </div>
  );
}
