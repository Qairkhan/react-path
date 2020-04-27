import React from "react";
import { I18N } from "../../core/constants";

const LoginForm = (props) => {
  return (
    <form action="">
      <div>
        <input placeholder={I18N.EN.LOGIN} />
      </div>
      <div>
        <input placeholder={"Pass"} />
      </div>
      <div>
        <input type={"checkbox"} /> remember me
      </div>
      <div>
        <button>{I18N.EN.LOGIN}</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  return (
    <div>
      <h1>{I18N.EN.LOGIN}</h1>
      <LoginForm />
    </div>
  );
};

export { Login };
