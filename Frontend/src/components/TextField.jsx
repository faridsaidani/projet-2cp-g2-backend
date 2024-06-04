import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className=" flex flex-col mb-4">
      {label && <label htmlFor={field.name}>{label}</label>}
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "border-red-500"
        } border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="error text-xs text-red-500"
      />
    </div>
  );
};

export default TextField;
