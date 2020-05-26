import React from "react";
import { Field } from "redux-form";

const TextareaCastom = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea {...input} {...props} />
    </div>
  );
};

const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}

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

export { TextareaCastom, createField };
