import * as React from "react";
import "./styles.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import FindMovieState from "../FindMovieState/FindMovieState";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <FindMovieState />
      </ErrorBoundary>
    </div>
  );
}
