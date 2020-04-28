import { usersAPI } from "../api/api";
import { getAuthUserData, setUserData } from "./actionCreators";

const login = (email, password, rememberMe) => (dispatch) => {
    usersAPI.authLogin(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };

  const logout = () => (dispatch) => {
    usersAPI.authLogout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, null));
      }
    });
  };

export {login, logout}