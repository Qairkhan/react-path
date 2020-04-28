import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { I18N, ROUTES } from "../../core/constants";
import { required } from "../../utils/validation/validators";
import { login } from "../../redux/thunks";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={I18N.EN.LOGIN}
          name={"email"}
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
          type={"password"}
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
    props.login(formData.email, formData.pass, formData.remember);
  };

  if (props.isAuth) {
    return <Redirect to={ROUTES.PROFILE} />;
  }

  return (
    <div>
      <h1>{I18N.EN.LOGIN}</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
