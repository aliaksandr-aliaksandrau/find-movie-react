import {
  addMovieActionCreator,
  updateMovieActionCreator,
} from "../../store/action-creators";

export type MovieFormType = "Edit" | "Add";

export interface AddEditMovieFormProps {
  formType: MovieFormType;
  submitButtonText: string;
  actionCreator: Function;
}

export const addMovieFormPropsConfig: AddEditMovieFormProps = {
  formType: "Add",
  submitButtonText: "Submit",
  actionCreator: addMovieActionCreator,
};

export const editMovieFormPropsConfig: AddEditMovieFormProps = {
  formType: "Edit",
  submitButtonText: "Save",
  actionCreator: updateMovieActionCreator,
};
