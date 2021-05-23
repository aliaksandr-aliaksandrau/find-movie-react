import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import SearchIcon from "../../components/icons/SearchIcon";
import Logo from "../../components/Logo/Logo";
import { State } from "../../store/initialState";
import "./MovieDetails.scss";

export default function MovieDetails() {
  const { id } = useParams() as { id: string };
  const history = useHistory();

  const movie = useSelector((state: State) => {
    return state.filteredMovies.find((e) => e.id == id);
  });

  function moveToMovies() {
    history.push(`/`);
  }

  return (
    <div className="MovieDetails">
      <div className="MovieDetails__header">
        <Logo />
        <div className="MovieDetails__search-icon" onClick={moveToMovies}>
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
          <div className="MovieDetails__genre">{movie.genresDescription}</div>
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
