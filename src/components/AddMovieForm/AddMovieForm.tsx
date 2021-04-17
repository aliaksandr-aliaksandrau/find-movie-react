import * as React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addMovieActionCreator,
  initSortFilterMovies,
} from "../../store/action-creators";
import { Movie } from "../MovieCard";

interface AddMovieFormValues {
  title: string;
  releaseDate: string;
  genres: string[];
  movieUrl: string;
  overview: string;
  runtime: number;
}

export default function AddMovieForm() {
  const dispatch = useDispatch();

  return (
    <div className="AddMovieForm__form-container">
      <Formik
        initialValues={{
          title: "",
          releaseDate: "",
          genres: [],
          movieUrl: "",
          overview: "",
          runtime: 0,
        }}
        onSubmit={(
          values: AddMovieFormValues,
          { setSubmitting, resetForm }: FormikHelpers<AddMovieFormValues>
        ) => {
          setSubmitting(false);

          const movie = new Movie({
            id: uuidv4(),
            title: values.title,
            release_date: values.releaseDate,
            genres: values.genres,
            poster_path: values.movieUrl,
            overview: values.overview,
            runtime: values.runtime,
          });

          dispatch(addMovieActionCreator(movie));
          dispatch(initSortFilterMovies());

          resetForm();
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <label>TITLE</label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Title here"
            />

            <label>RELEASE DATE</label>
            <Field
              type="date"
              id="releaseDate"
              name="releaseDate"
              placeholder="Select Date"
            />

            <label>MOVIE URL</label>
            <Field
              type="text"
              id="movieUrl"
              name="movieUrl"
              placeholder="Movie URL here"
            />

            <label>GENRE</label>
            <Field
              as="select"
              type="select"
              multiple
              id="genres"
              name="genres"
              placeholder="Select Genre"
              style={{ display: 'block' }}
            >
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
            </Field>

            <label>OVERVIEW</label>
            <Field
              type="text"
              id="overview"
              name="overview"
              placeholder="Overview here"
            />

            <label>RUNTIME</label>
            <Field
              type="number"
              id="runtime"
              name="runtime"
              placeholder="Runtime here"
            />

            <div className="ModalWindow__control-block-container">
              <button
                className="ModalWindow__button-light"
                type="reset"
                onClick={() => resetForm()}
              >
                RESET
              </button>
              <button className="ModalWindow__button-filled" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
