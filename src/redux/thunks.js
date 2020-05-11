import { usersAPI } from "../api/api";

import { getAuthUserData, setUserData } from "./actionCreators";
import { stopSubmit } from "redux-form";

const login = (email, password, rememberMe) => async (dispatch) => {
  let response = usersAPI.authLogin(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let mess =
      response.data.messages.length > 0 ? response.data.messages[0] : "error";
    dispatch(stopSubmit("login", { _error: mess }));
  }
};

const logout = () => async (dispatch) => {
  let response = await usersAPI.authLogout();

  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, null));
  }
};

export { login, logout };
