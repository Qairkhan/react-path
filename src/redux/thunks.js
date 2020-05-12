import { usersAPI } from "../api/api";

import { setUserData } from "./actionCreators";
import { stopSubmit } from "redux-form";

const getAuthUserData = () => async (dispatch) => {
  const response = await usersAPI.authMe();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(response.data.data));
  }
};

const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await usersAPI.authLogin(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let mess =
      response.data.messages.length > 0 ? response.data.messages[0] : "error";
    dispatch(stopSubmit("login", { _error: mess }));
  }
};

const logout = () => async (dispatch) => {
  const response = await usersAPI.authLogout();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, null));
  }
};

export { login, logout, getAuthUserData };
