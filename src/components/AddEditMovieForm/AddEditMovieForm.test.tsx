import { render, screen } from "@testing-library/react";
import React = require("react");
import { addMovieActionCreator } from "../../store/action-creators";
import AddEditMovieForm from "./AddEditMovieForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("AddEditMovieForm", () => {
  test("", () => {

    const props = {
      movieId: "sd",
      closeModalWindow: () => jest.fn(),
      formConfig: {
        formType: "Add",
        submitButtonText: "Submit",
        actionCreator: addMovieActionCreator,
      },
    } as any;

   // const { asFragment } = render(<ModalWindow(AddEditMovieForm, "Edit Movie")>);

    const { asFragment } = render(<AddEditMovieForm {...props} />);

    expect(asFragment).toMatchSnapshot();
  });
});
