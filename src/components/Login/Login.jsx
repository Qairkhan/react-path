import React from "react";
import { Field, reduxForm } from "redux-form";

import { I18N } from "../../core/constants";
import { required } from "../../utils/validation/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={I18N.EN.LOGIN}
          name={"login"}
          component={"input"}
          required={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={I18N.EN.PASS}
          name={"pass"}
          component={"input"}
          required={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"remember"} component={"input"} />
        {I18N.EN.REMEMBER}
      </div>
      <div>
        <button>{I18N.EN.LOGIN}</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log("login", formData);
  };
  return (
    <div>
      <h1>{I18N.EN.LOGIN}</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export { Login };
