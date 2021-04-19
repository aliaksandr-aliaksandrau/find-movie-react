import * as React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { initSortFilterMovies } from "../../store/action-creators";
import { Movie } from "../MovieCard";
import { AddEditMovieFormProps } from "./AddEditMovieFormPropsConfig";
import { State } from "../../store/initialState";

interface AddEditMovieFormValues {
  title: string;
  releaseDate: string;
  genres: string[];
  movieUrl: string;
  overview: string;
  runtime: number;
}

const movieValidationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter movie title"),
  movieUrl: Yup.string().url("Invalid poster link url"),
  releaseDate: Yup.date().required("Please enter release date"),
  genres: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one genre to proceed"),
  runtime: Yup.number().min(0, "Please enter positive value"),
});

export default function AddEditMovieForm(props: {
  movieId: string;
  closeModalWindow: Function;
  formConfig: AddEditMovieFormProps;
}) {
  const dispatch = useDispatch();

  const activeMovie: Movie =
    props.formConfig.formType === "Edit"
      ? useSelector((state: State) =>
          state.movieList.find((m) => m.id === props.movieId)
        )
      : ({} as Movie);

  const movieFormInitialValues: AddEditMovieFormValues = {
    title: activeMovie.title || "",
    releaseDate: activeMovie.releaseDate || "",
    genres: activeMovie.genres || [],
    movieUrl: activeMovie.posterPath || "",
    overview: activeMovie.overview || "",
    runtime: activeMovie.runtime || 0,
  };

  //  const [showMovieAddedMsg, setShowMovieAddedMsg] = React.useState(false);

  return (
    <div className="AddMovieForm__form-container">
      <Formik
        initialValues={movieFormInitialValues}
        validationSchema={movieValidationSchema}
        onSubmit={(
          values: AddEditMovieFormValues,
          { setSubmitting, resetForm }: FormikHelpers<AddEditMovieFormValues>
        ) => {
          setSubmitting(false);

          let movie: Movie = null;

          if (props.formConfig.formType === "Add") {
            movie = new Movie({
              id: uuidv4(),
              title: values.title,
              release_date: values.releaseDate,
              genres: values.genres,
              poster_path: values.movieUrl,
              overview: values.overview,
              runtime: values.runtime,
            });
          } else if (props.formConfig.formType === "Edit") {
            movie = activeMovie;
            movie.title = values.title;
            movie.releaseDate = values.releaseDate;
            movie.genres = values.genres;
            movie.posterPath = values.movieUrl;
            movie.overview = values.overview;
            movie.runtime = values.runtime;
          }

          dispatch(props.formConfig.actionCreator(movie));
          dispatch(initSortFilterMovies());
          // setShowMovieAddedMsg(true);
        }}
      >
        {({ resetForm, touched }) => (
          <Form>
            {/* {Object.values(touched).every((el) => !el) && showMovieAddedMsg && (
              <span>Movie was added</span>
            )} */}

            <label>TITLE</label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Title here"
            />
            <ErrorMessage
              name="title"
              component="span"
              className={"ModalWindow__form-error-message"}
            />

            <label>RELEASE DATE</label>
            <Field
              type="date"
              id="releaseDate"
              name="releaseDate"
              placeholder="Select Date"
            />
            <ErrorMessage
              name="releaseDate"
              component="span"
              className={"ModalWindow__form-error-message"}
            />

            <label>MOVIE URL</label>
            <Field
              type="text"
              id="movieUrl"
              name="movieUrl"
              placeholder="Movie URL here"
            />
            <ErrorMessage
              name="movieUrl"
              component="span"
              className={"ModalWindow__form-error-message"}
            />

            <label>GENRE</label>
            <Field
              as="select"
              type="select"
              multiple
              id="genres"
              name="genres"
              placeholder="Select Genre"
            >
              <option value=""></option>
              <option value="Crime">Crime</option>
              <option value="Documentary">Documentary</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
            </Field>
            <ErrorMessage
              name="genres"
              component="span"
              className={"ModalWindow__form-error-message"}
            />

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
            <ErrorMessage
              name="runtime"
              component="span"
              className={"ModalWindow__form-error-message"}
            />

            <div className="ModalWindow__control-block-container">
              <button
                className="ModalWindow__button-light"
                type="reset"
                onClick={() => {
                  // setShowMovieAddedMsg(false);
                  resetForm;
                }}
              >
                RESET
              </button>
              <button className="ModalWindow__button-filled" type="submit">
                {props.formConfig.submitButtonText.toLocaleUpperCase()}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
