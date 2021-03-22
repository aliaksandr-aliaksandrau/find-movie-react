import * as React from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Movie } from "../../components/MovieCard/movie.model";
import { mockedMovies } from "../../components/MovieDashboard/mocked-movies";
import MovieDashboard from "../../components/MovieDashboard/MovieDashboard";

type AppState = {
  movies: Movie[];
  searchText: string;
  searchMovie: (e: string) => void;
  showAddMovieForm: boolean;
  closeAddMovieForm: () => void;
};

const AddMovieModalWindow = ModalWindow(AddMovieForm, "Add Movie");

class AppContainer extends React.Component<{}, any> {
  state: any;
  constructor(props: any) {
    super(props);
    this.state = {
      movies: mockedMovies.map((e) => new Movie(e)),
      searchText: "",
      searchMovie: (e: string) => {
        this.setState({ searchText: e });
      },
      showAddMovieForm: false,
      openAddMovieForm: () => {
        this.setState({ showAddMovieForm: true });
      },
      closeAddMovieForm: () => {
        this.setState({ showAddMovieForm: false });
      },
    };
  }

  render() {
    const filteredMovies = this.state.movies
      .filter((e: any) => e.title.match(this.state.searchText))
      .slice(0, 9);

    return (
      <>
        <Header
          searchMovie={this.state.searchMovie}
          openAddMovieForm={this.state.openAddMovieForm}
        />
        <MovieDashboard movies={filteredMovies} />
        <Footer />
        {this.state.showAddMovieForm && (
          <AddMovieModalWindow
            title={"ADD MOVIE"}
            closeModalWindow={this.state.closeAddMovieForm}
          />
        )}
      </>
    );
  }
}

export default AppContainer;
