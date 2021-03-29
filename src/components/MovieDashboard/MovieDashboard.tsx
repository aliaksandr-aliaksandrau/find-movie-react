import * as React from "react";
import { useCallback, useState } from "react";
import DeleteMovieForm from "../DeleteMovieForm/DeleteMovieForm";
import EditMovieForm from "../EditMovieForm/EditMovieForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Movie } from "../MovieCard/movie.model";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieDashboard.scss";

type MovieDashboardProps = {
  movies: Movie[];
  setSelectedMovie: Function;
};

const EditMovieModalWindow = ModalWindow(EditMovieForm, "Edit Movie");
const DeleteMovieModalWindow = ModalWindow(DeleteMovieForm, "Delete Movie");

export default function MovieDashboard(props: MovieDashboardProps) {
  const movies = props.movies;

  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [activeMovieId, setActiveMovieId] = useState(null);

  const getOpenDeleteMovieForm = useCallback(
    (movieId: string) => () => {
      setActiveMovieId(movieId);
      setShowDeleteForm(true);
    },
    [showDeleteForm]
  );

  const getOpenEditMovieForm = (movieId: string) => () => {
    setShowEditForm(true);
    setActiveMovieId(movieId);
  };

  let result;

  if (movies && Array.isArray(movies) && movies.length === 0) {
    result = <div className="MovieDashboard__not-found">No Movie Found</div>;
  } else {
    result = (
      <>
        <div className="MovieDashboard__movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              openEditMovieForm={getOpenEditMovieForm(movie.id)}
              openDeleteMovieForm={getOpenDeleteMovieForm(movie.id)}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
        </div>

        {showDeleteForm && (
          <DeleteMovieModalWindow
            movieId={activeMovieId}
            closeModalWindow={() => setShowDeleteForm(false)}
          />
        )}
        {showEditForm && (
          <EditMovieModalWindow
            movieId={activeMovieId}
            closeModalWindow={() => setShowEditForm(false)}
          />
        )}
      </>
    );
  }
  return result;
}
