import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initSortFilterMovies,
  updateMovieActionCreator,
} from "../../store/action-creators";
import { State } from "../../store/initialState";
import { Movie } from "../MovieCard";

export default function EditMovieForm(props: {
  movieId: string;
  closeModalWindow: Function;
}) {
  const movie: Movie = useSelector((state: State) =>
    state.movieList.find((m) => m.id === props.movieId)
  );

  const dispatch = useDispatch();

  function editMovie(event: any) {
    event.preventDefault();

    const title = event.target.title.value;
    const releaseDate = event.target.releaseDate.value;
    const posterPath = event.target.posterPath.value;
    //const genre = event.target.genre.value;
    const overview = event.target.overview.value;
    const runtime = event.target.runtime.value;

    movie.title = title;
    movie.releaseDate = releaseDate;
    movie.posterPath = posterPath;
    // movie.genres = [genre];
    movie.overview = overview;
    movie.runtime = runtime;

    dispatch(updateMovieActionCreator(movie));
    dispatch(initSortFilterMovies());

    props.closeModalWindow();
  }

  return (
    <form onSubmit={editMovie}>
      <label>MOVIE ID</label>
      <p>{movie.id}</p>
      <label>TITLE</label>
      <input
        type="text"
        id="title"
        defaultValue={movie.title}
        placeholder="Title here"
      ></input>
      <label>RELEASE DATE</label>
      <input
        type="date"
        id="releaseDate"
        defaultValue={movie.releaseDate}
        placeholder="Select Date"
      ></input>
      <label>MOVIE URL</label>
      <input
        type="text"
        id="posterPath"
        defaultValue={movie.posterPath}
        placeholder="Movie URL here"
      ></input>
      <label>GENRE</label>
      <input
        type="select"
        id="genres"
        defaultValue={movie.genres}
        placeholder="Select Genre"
      ></input>
      <label>OVERVIEW</label>
      <input
        type="text"
        id="overview"
        defaultValue={movie.overview}
        placeholder="Overview here"
      ></input>
      <label>RUNTIME</label>
      <input
        type="number"
        id="runtime"
        defaultValue={movie.runtime}
        placeholder="Runtime here"
      ></input>

      <div className="ModalWindow__control-block-container">
        <button className="ModalWindow__button-light">RESET</button>
        <input
          type="submit"
          value="SAVE"
          className="ModalWindow__button-filled"
        />
      </div>
    </form>
  );
}
