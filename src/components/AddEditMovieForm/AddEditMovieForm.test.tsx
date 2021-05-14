import { render, screen, waitFor } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import {
  addMovieActionCreator,
  initSortFilterMovies,
} from "../../store/action-creators";
import AddEditMovieForm from "./AddEditMovieForm";
import { Movie } from "../MovieCard";

const mockedMovie = new Movie({
  id: 284053,
  title: "Thor: Ragnarok",
  tagline: "No Hammer. No Problem.",
  vote_average: 7.4,
  vote_count: 5349,
  release_date: "2017-10-25",
  poster_path:
    "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  overview:
    "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
  budget: 180000000,
  revenue: 854229371,
  genres: ["Action", "Adventure", "Fantasy"],
  runtime: 130,
});

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn((s) => mockedMovie),
  useDispatch: () => mockDispatch,
}));
const mockActionCreator = jest.fn(() => "mockActionCreatorReturnValue");
describe("AddEditMovieForm", () => {
  let props: any;
  let mockCloseWindow: jest.Mock;

  beforeEach(() => {
    mockCloseWindow = jest.fn();

    props = {
      movieId: 284053,
      closeModalWindow: mockCloseWindow,
      formConfig: {
        formType: "Edit",
        submitButtonText: "Submit",
        actionCreator: mockActionCreator,
      },
    };
  });

  test("submit button", async () => {
    console.log(props.formConfig.submitButtonText);
    render(<AddEditMovieForm {...props} />);
    const submit = screen.getByText(
      props.formConfig.submitButtonText.toUpperCase()
    );

    expect(submit).toBeInTheDocument();

    userEvent.click(submit);

    await waitFor(() => {
      expect(mockCloseWindow).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(mockActionCreator());
      expect(mockDispatch).toHaveBeenCalledWith(initSortFilterMovies());
    });
  });
});
