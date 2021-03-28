import * as React from "react";
import { useLoadMovieById } from "../../utility/custom-hooks/custom-hooks";

export default function DeleteMovieForm(props: { movieId: string }) {
  useLoadMovieById(props.movieId);
  return (
    <>
      <div className="ModalWindow__description">
        Are your sure you want to delete this movie?
      </div>
      <form>
        <div className="ModalWindow__control-block-container">
          <button className="ModalWindow__button-filled">CONFIRM</button>
        </div>
      </form>
    </>
  );
}
