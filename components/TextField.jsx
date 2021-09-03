import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col text-left">
      <label
        className="text-xs my-3 text-dark font-medium"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`border rounded-md py-2 px-1 outline-none ${
          meta.touched && meta.error && "border-primary"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-primary text-xs py-1"
      />
    </div>
  );
};
