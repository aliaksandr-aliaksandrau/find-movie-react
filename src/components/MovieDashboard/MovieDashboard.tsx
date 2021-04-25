import * as React from "react";
import { useCallback, useState } from "react";
import AddEditMovieForm from "../AddEditMovieForm/AddEditMovieForm";
import { editMovieFormPropsConfig } from "../AddEditMovieForm/AddEditMovieFormPropsConfig";
import DeleteMovieForm from "../DeleteMovieForm/DeleteMovieForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Movie } from "../MovieCard/movie.model";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieDashboard.scss";
import NoMovieFound from "./NoMovieFound/NoMovieFound";

type MovieDashboardProps = {
  movies: Movie[];
  setSelectedMovie: Function;
};

const EditMovieModalWindow = ModalWindow(AddEditMovieForm, "Edit Movie");
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
    result = <NoMovieFound />;
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
            formConfig={editMovieFormPropsConfig}
            closeModalWindow={() => setShowEditForm(false)}
          />
        )}
      </>
    );
  }
  return result;
}
