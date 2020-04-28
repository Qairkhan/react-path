import { usersAPI } from "../api/api";
import { getAuthUserData } from "./actionCreators";

const login = (email, password, rememberMe) => (dispatch) => {
    usersAPI.authLogin(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };

  