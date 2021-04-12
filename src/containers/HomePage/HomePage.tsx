import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";
import { loadMovies } from "../../store/action-creators";
import { State } from "../../store/initialState";
import FilterMenu from "../FilterMenu/FilterMenu";
import MovieDetails from "../MovieDetails/MovieDetails";

const AddMovieModalWindow = ModalWindow(AddMovieForm, "Add Movie");

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const [searchText, setSearchText] = useState("");

  const movies = useSelector((state: State) => state.filteredMovies);

  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [activeMovie, setActiveMovie] = useState(null);
  const goHomePage = () => setActiveMovie(null);

  return (
    <>
      {activeMovie && (
        <MovieDetails movie={activeMovie} goHomePage={goHomePage} />
      )}
      {!activeMovie && (
        <Header
          searchMovie={setSearchText}
          openAddMovieForm={() => setShowAddMovieForm(true)}
        />
      )}
      <FilterMenu />
      <MovieDashboard movies={movies} setSelectedMovie={setActiveMovie} />
      <Footer />
      {showAddMovieForm && (
        <AddMovieModalWindow
          closeModalWindow={() => setShowAddMovieForm(false)}
        />
      )}
    </>
  );
}
