import * as React from "react";
import "./styles.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import AppContainer from "../../containers/AppContainer/AppContainer";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <AppContainer />
      </ErrorBoundary>
    </div>
  );
}
