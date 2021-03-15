import * as React from "react";

import "./ModalWindow.scss";

export default function ModalWindow(Component: any): any {
  return function ModalWindowComponent({ ...props }) {
    return (
      <div className="ModalWindow">
        <div className="ModalWindow__form-container">
          <div className="ModalWindow__close-button-container">
            <button onClick={props.closeModalWindow}>close</button>
          </div>
          <div className="ModalWindow__title">{props.title}</div>
          <Component {...props} />
        </div>
      </div>
    );
  };
}
