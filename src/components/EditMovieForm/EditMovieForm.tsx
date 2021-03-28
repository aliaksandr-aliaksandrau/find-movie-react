import * as React from "react";
import { useEffect } from "react";

export default function EditMovieForm(props: { movieId: string }) {
  useEffect(() => {
    console.log("EditMovieForm: load movie by id: ", movieId);
    return () => console.log("EditMovieForm: unsubscribe movie loading");
  }, [props.movieId]);

  const movieId = props.movieId;
  return (
    <form>
      <label>MOVIE ID</label>
      <p>{movieId}</p>
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
