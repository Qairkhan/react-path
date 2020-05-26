import React from "react";
import { Field } from "redux-form";

const TextareaCastom = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea {...input} {...props} />
    </div>
  );
};

const FormControl = ({ input, meta, child, props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
      <FormControl {...props}>
        {" "}
        <textarea {...input} {...restProps} />
      </FormControl>
    );
  };

const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      {" "}
      <input {...input} {...restProps} />
    </FormControl>
  );
};

const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />{" "}
    {text}
  </div>
);

export { TextareaCastom, createField, Input, TextArea };
