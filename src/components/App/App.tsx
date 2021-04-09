import * as React from "react";
import "./styles.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import HomePage from "../../containers/HomePage/HomePage";
import { Provider } from "react-redux";
import store from "../../store/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      </div>
    </Provider>
  );
}
