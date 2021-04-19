import * as React from "react";
import { useField } from "formik";

export default function ModalFormInputField({ label, ...props }: any): any {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className={"ModalWindow__form-error-message"}>{meta.error}</div>
      ) : null}
    </>
  );
}
