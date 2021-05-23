import * as React from "react";
import ClosingCrossIcon from "../icons/ClosingCrossIcon";

import "./ModalWindow.scss";

export default function ModalWindow(Component: any, title: string = ""): any {
  return function ModalWindowComponent({ ...props }) {
    return (
      <div className="ModalWindow">
        <div className="ModalWindow__form-container">
          <div className="ModalWindow__close-button-container">
            <span onClick={props.closeModalWindow}>
              <ClosingCrossIcon />
            </span>
          </div>
          <div className="ModalWindow__title">{title.toUpperCase()}</div>
          <Component {...props} />
        </div>
      </div>
    );
  };
}
