import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteMovieById, initSortFilterMovies } from "../../store/action-creators";
import { useLoadMovieById } from "../../utility/custom-hooks/custom-hooks";

export default function DeleteMovieForm(props: { movieId: string, closeModalWindow: Function }) {
  useLoadMovieById(props.movieId);

  const dispatch = useDispatch();

  function deleteMovie(event: any) {
    event.preventDefault();
    dispatch(deleteMovieById(props.movieId));
    dispatch(initSortFilterMovies());
    props.closeModalWindow();
  }

  return (
    <>
      <div className="ModalWindow__description">
        Are your sure you want to delete this movie?
      </div>
      <form onSubmit={deleteMovie}>
        <div className="ModalWindow__control-block-container">
          <button type="submit" className="ModalWindow__button-filled">
            CONFIRM
          </button>
        </div>
      </form>
    </>
  );
}
