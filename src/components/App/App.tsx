import * as React from "react";
import "./styles.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import HomePage from "../../containers/HomePage/HomePage";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </div>
  );
}
