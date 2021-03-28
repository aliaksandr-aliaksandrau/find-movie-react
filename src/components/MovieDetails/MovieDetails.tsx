import * as React from "react";
import SearchIcon from "../icons/SearchIcon/SearchIcon";
import Logo from "../Logo/Logo";
import { Movie } from "../MovieCard/movie.model";
import "./MovieDetails.scss";

export default function MovieDetails(props: { movie: Movie; goHomePage: any }) {
  const movie = props.movie;

  return (
    <div className="MovieDetails">
      <div className="MovieDetails__header">
        <Logo />
        <div className="MovieDetails__search-icon" onClick={props.goHomePage}>
          <SearchIcon />
        </div>
      </div>

      <div className="MovieDetails__main-section">
        <img
          className="MovieDetails__image"
          src={movie.posterPath}
          alt="film-logo"
        ></img>

        <div className="MovieDetails__details">
          <div className="MovieDetails__title">
            {movie.title}
            <div className="MovieDetails__rating">{movie.rating}</div>
          </div>
          <div className="MovieDetails__genre">{movie.genresDesciption}</div>
          <div className="MovieDetails__year">
            <span> {movie.releaseYear} </span>
            <span> {movie.runtime} min</span>
          </div>
          <div className="MovieDetails__overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
