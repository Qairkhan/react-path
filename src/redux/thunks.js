
const login = (email, password, rememberme) => (dispatch) => {
    usersAPI.authMe().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(response.data.data));
      }
    });
  };