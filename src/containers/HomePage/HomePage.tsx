import * as React from "react";
import { useEffect, useState } from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Movie } from "../../components/MovieCard/movie.model";
import { mockedMovies } from "../../components/MovieDashboard/mocked-movies";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";
import FilterMenu from "../FilterMenu/FilterMenu";
import MovieDetails from "../MovieDetails/MovieDetails";

const AddMovieModalWindow = ModalWindow(AddMovieForm, "Add Movie");

export default function HomePage() {
  const movieList = mockedMovies.map((e) => new Movie(e));

  const [searchText, setSearchText] = useState("");
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  const [movies, setMovies] = useState(movieList.slice(0, 9));

  const [activeMovie, setActiveMovie] = useState(null);

  const [genreFilter, setGenreFilter] = useState("");

  const goHomePage = () => setActiveMovie(null);

  useEffect(() => {
    const filteredMovies = movieList
      .filter((movie: Movie) =>
        genreFilter === ""
          ? true
          : movie.genres.some((genre) => genre === genreFilter)
      )
      .filter((e: any) => e.title.match(searchText))
      .slice(0, 9);

    setMovies(filteredMovies);
  }, [searchText, genreFilter]);

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
