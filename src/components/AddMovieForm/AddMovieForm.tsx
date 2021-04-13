import * as React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addMovieActionCreator,
  initSortFilterMovies,
} from "../../store/action-creators";
import { Movie } from "../MovieCard";

export default function AddMovieForm(props: any) {
  const dispatch = useDispatch();

  function createMovie(event: any) {
    event.preventDefault();

    const title = event.target.title.value;
    const releaseDate = event.target.releaseDate.value;
    const movieUrl = event.target.movieUrl.value;
    const genre = event.target.genre.value;
    const overview = event.target.overview.value;
    const runtime = event.target.runtime.value;

    const movie = new Movie({
      id: uuidv4(),
      title: title,
      release_date: releaseDate,
      genres: [genre],
      poster_path: movieUrl,
      overview: overview,
      runtime: runtime,
    });

    dispatch(addMovieActionCreator(movie));
    dispatch(initSortFilterMovies());

    props.closeModalWindow();
  }

  return (
    <div className="AddMovieForm__form-container">
      <form onSubmit={createMovie}>
        <label>TITLE</label>
        <input type="text" id="title" placeholder="Title here"></input>
        <label>RELEASE DATE</label>
        <input type="date" id="releaseDate" placeholder="Select Date"></input>
        <label>MOVIE URL</label>
        <input type="text" id="movieUrl" placeholder="Movie URL here"></input>
        <label>GENRE</label>
        <input type="select" id="genre" placeholder="Select Genre"></input>
        <label>OVERVIEW</label>
        <input type="text" id="overview" placeholder="Overview here"></input>
        <label>RUNTIME</label>
        <input type="number" id="runtime" placeholder="Runtime here"></input>

        <div className="ModalWindow__control-block-container">
          <button className="ModalWindow__button-light">RESET</button>
          <input
            type="submit"
            value="SUBMIT"
            className="ModalWindow__button-filled"
          />
        </div>
      </form>
    </div>
  );
}
