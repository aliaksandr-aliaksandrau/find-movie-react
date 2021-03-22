import * as React from "react";
import { useState } from "react";
import DeleteMovieForm from "../DeleteMovieForm/DeleteMovieForm";
import EditMovieForm from "../EditMovieForm/EditMovieForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Movie } from "../MovieCard/movie.model";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieDashboard.scss";

type MovieDashboardProps = {
  movies: Movie[];
};

const EditMovieModalWindow = ModalWindow(EditMovieForm, "Edit Movie");
const DeleteMovieModalWindow = ModalWindow(DeleteMovieForm, "Delete Movie");

export default function MovieDashboard(props: MovieDashboardProps) {
  const movies = props.movies;

  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeMovie, setActiveMovie] = useState({});

  const getOpenDeleteMovieForm = (id: string) => () => {
    setShowDeleteForm(true);
  };

  const getOpenEditMovieForm = (movie: Movie) => () => {
    setShowEditForm(true);
    setActiveMovie(movie);
  };

  let result;

  if (movies && Array.isArray(movies) && movies.length === 0) {
    result = <div className="MovieDashboard__not-found">No Movie Found</div>;
  } else {
    result = (
      <>
        <div>{showDeleteForm}</div>
        <div className="MovieDashboard__movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              openEditMovieForm={getOpenEditMovieForm(movie)}
              openDeleteMovieForm={getOpenDeleteMovieForm(movie.id)}
            />
          ))}
        </div>

        {showDeleteForm && (
          <DeleteMovieModalWindow
            closeModalWindow={() => setShowDeleteForm(false)}
          />
        )}
        {showEditForm && (
          <EditMovieModalWindow
            movie={activeMovie}
            closeModalWindow={() => setShowEditForm(false)}
          />
        )}
      </>
    );
  }
  return result;
}
