import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as React from "react";
import Search from "./SearchBar";

const pushMockFn = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: pushMockFn,
  }),
}));

describe("Search", () => {
  afterEach(cleanup);

  test("submit button", () => {
    render(<Search />);

    const button = screen.getByText(/Search/i);

    // const input: HTMLInputElement = screen.getByPlaceholderText(
    //   "What do you want to watch?"
    // ) as HTMLInputElement;

    userEvent.click(button);

    expect(pushMockFn).toBeCalledWith("?search=", { search: "" });
  });
});
