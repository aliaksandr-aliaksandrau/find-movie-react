import * as React from "react";
import "./styles.scss";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MovieDashboard from "../MovieDashboard/MovieDashboard";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <MovieDashboard />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
