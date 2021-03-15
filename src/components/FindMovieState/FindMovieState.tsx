import * as React from "react";
import AddMovie from "../AddMovie/AddMovie";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Movie } from "../MovieCard/movie.model";
import { mockedMovies } from "../MovieDashboard/mocked-movies";
import MovieDashboard from "../MovieDashboard/MovieDashboard";

type AppState = {
  movies: Movie[];
  searchText: string;
  searchMovie: (e: string) => void;
  showAddMovieForm: boolean;
  showEditMovieForm: boolean;
  closeAddMovieForm: () => void;
};

const AddMovieModalWindow = ModalWindow(AddMovie);

class FindMovieState extends React.Component<{}, any> {
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
      showEditMovieForm: false,
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

export default FindMovieState;
