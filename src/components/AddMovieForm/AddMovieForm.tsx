import * as React from "react";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
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

const movieFormInitialValues: AddMovieFormValues = {
  title: "",
  releaseDate: "",
  genres: [],
  movieUrl: "",
  overview: "",
  runtime: 0,
};

const movieValidationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter movie title"),
  movieUrl: Yup.string().url("Invalid poster link url"),
  releaseDate: Yup.date().required("Please enter release date"),
  genres: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one genre to proceed"),
  runtime: Yup.number().min(0, "Please enter positive value"),
});

export default function AddMovieForm() {
  const dispatch = useDispatch();

  //  const [showMovieAddedMsg, setShowMovieAddedMsg] = React.useState(false);

  return (
    <div className="AddMovieForm__form-container">
      <Formik
        initialValues={movieFormInitialValues}
        validationSchema={movieValidationSchema}
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
          // setShowMovieAddedMsg(true);
          resetForm();
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
              style={{ display: "block" }}
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
                SUBMIT
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
