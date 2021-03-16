import * as React from "react";

export default function DeleteMovieForm(props: any) {
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
