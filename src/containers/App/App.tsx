import * as React from "react";
import "./styles.scss";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import HomePage from "../HomePage/HomePage";
import { Provider } from "react-redux";
import store from "../../store/store";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "../PageNotFound/PageNotFound";

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div className="App">
            <ErrorBoundary>
              <Switch>
                <Route path="/not-found">
                  <NotFoundPage />
                </Route>

                <Route path="/movies">
                  <HomePage />
                </Route>
                <Redirect exact from="/" to="/movies" />

                <Redirect from="*" to="/not-found" />
              </Switch>
            </ErrorBoundary>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}
