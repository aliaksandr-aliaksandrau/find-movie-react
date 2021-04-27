import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import AddEditMovieForm from "../../components/AddEditMovieForm/AddEditMovieForm";
import { addMovieFormPropsConfig } from "../../components/AddEditMovieForm/AddEditMovieFormPropsConfig";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";
import {
  initSortFilterMovies,
  loadMovies,
  setSearchText,
} from "../../store/action-creators";
import { State } from "../../store/initialState";
import FilterMenu from "../FilterMenu/FilterMenu";
import MovieDetails from "../MovieDetails/MovieDetails";

const AddMovieModalWindow = ModalWindow(AddEditMovieForm, "Add Movie");

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  let location = useLocation();

  useEffect(() => {
    const search = new URLSearchParams(location.search).get("search");
    if (search && search !== "") {
      dispatch(setSearchText(search));
      dispatch(initSortFilterMovies());
    }
  }, [location]);

  const movies = useSelector((state: State) => state.filteredMovies);

  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  const { path, url } = useRouteMatch();

  return (
    <>
      {/* {activeMovie && (
        <MovieDetails movie={activeMovie} goHomePage={goHomePage} />
      )} */}
      <Switch>
        <Route exact path={`${path}/:id`}>
          <MovieDetails />
        </Route>
      </Switch>

      <Switch>
        <Route exact path={`${path}/`}>
          <Header openAddMovieForm={() => setShowAddMovieForm(true)} />
        </Route>
      </Switch>
      {/* 
      {!activeMovie && (
        <Header openAddMovieForm={() => setShowAddMovieForm(true)} />
      )} */}
      <FilterMenu />
      <MovieDashboard movies={movies} />
      <Footer />
      {showAddMovieForm && (
        <AddMovieModalWindow
          formConfig={addMovieFormPropsConfig}
          closeModalWindow={() => setShowAddMovieForm(false)}
        />
      )}
    </>
  );
}
