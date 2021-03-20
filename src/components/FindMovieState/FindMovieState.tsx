import * as React from "react";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import DeleteMovieForm from "../DeleteMovieForm/DeleteMovieForm";
import EditMovieForm from "../EditMovieForm/EditMovieForm";
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

const AddMovieModalWindow = ModalWindow(AddMovieForm);
const DeleteMovieModalWindow = ModalWindow(DeleteMovieForm);
const EditMovieModalWindow = ModalWindow(EditMovieForm);

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
      openAddMovieForm: () => {
        this.setState({ showAddMovieForm: true });
      },
      closeAddMovieForm: () => {
        this.setState({ showAddMovieForm: false });
      },
      showDeleteMovieForm: false,
      openDeleteMovieForm: (id: string) => {
        this.setState({ showDeleteMovieForm: true });
      },
      closeDeleteMovieForm: () => {
        this.setState({ showDeleteMovieForm: false });
      },
      showEditMovieForm: false,
      openEditMovieForm: (id: string) => {
        this.setState({ showEditMovieForm: true });
      },
      closeEditMovieForm: () => {
        this.setState({ showEditMovieForm: false });
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
        <MovieDashboard
          movies={filteredMovies}
          openDeleteMovieForm={this.state.openDeleteMovieForm}
          openEditMovieForm={this.state.openEditMovieForm}
        />
        <Footer />
        {this.state.showAddMovieForm && (
          <AddMovieModalWindow
            title={"ADD MOVIE"}
            closeModalWindow={this.state.closeAddMovieForm}
          />
        )}
        {this.state.showDeleteMovieForm && (
          <DeleteMovieModalWindow
            title={"DELETE MOVIE"}
            closeModalWindow={this.state.closeDeleteMovieForm}
          />
        )}

        {this.state.showEditMovieForm && (
          <EditMovieModalWindow
            title={"EDIT MOVIE"}
            closeModalWindow={this.state.closeEditMovieForm}
          />
        )}
      </>
    );
  }
}

export default FindMovieState;
