import * as React from "react";
import { Movie } from "../MovieCard";

export default function EditMovieForm(props: { movie: Movie }) {
  const movie = props.movie;
  return (
    <form>
      <label>MOVIE ID</label>
      <p>{movie.id}</p>
      <label>TITLE</label>
      <input type="text" placeholder="Title here"></input>
      <label>RELEASE DATE</label>
      <input type="date" placeholder="Select Date"></input>
      <label>MOVIE URL</label>
      <input type="text" placeholder="Movie URL here"></input>
      <label>GENRE</label>
      <input type="select" placeholder="Select Genre"></input>
      <label>OVERVIEW</label>
      <input type="text" placeholder="Overview here"></input>
      <label>RUNTIME</label>
      <input type="text" placeholder="Runtime here"></input>

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
