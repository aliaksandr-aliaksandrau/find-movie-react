import * as React from "react";
import { useState } from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";
import { useLoadFilteredMovies } from "../../utility/custom-hooks/custom-hooks";
import FilterMenu from "../FilterMenu/FilterMenu";
import MovieDetails from "../MovieDetails/MovieDetails";

const AddMovieModalWindow = ModalWindow(AddMovieForm, "Add Movie");

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const movies = useLoadFilteredMovies(searchText, genreFilter);
  
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
      <FilterMenu
        setGenreFilter={setGenreFilter}
        activeFilterOption={genreFilter}
      />
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
