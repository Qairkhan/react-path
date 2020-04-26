import {
  usersAPI
} from "../api/api";

import ACTION_TYPES from "./actionTypes";

const addPostCreator = () => ({
  type: ACTION_TYPES.ADD_POST
});

const updateNewPostTextCreator = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_NEW_POST_TEXT,
    payload,
  };
};

const updateNewMessageBodyCreator = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
    payload,
  };
};

const updateSendMessageCreator = () => ({
  type: ACTION_TYPES.SEND_MESSAGE
});

const follow = (payload) => ({
  type: ACTION_TYPES.FOLLOW_TO_USER,
  payload,
});

const unfollow = (payload) => ({
  type: ACTION_TYPES.UNFOLLOW_TO_USER,
  payload,
});

const setUsers = (payload) => ({
  type: ACTION_TYPES.SET_USERS,
  payload
});

const setCurrentPage = (payload) => ({
  type: ACTION_TYPES.SET_CURRENT_PAGE,
  payload,
});

const setTotalUsersCount = (payload) => ({
  type: ACTION_TYPES.SET_TOTAL_USERS_COUNT,
  payload,
});

const toggleIsFetching = (payload) => ({
  type: ACTION_TYPES.TOGGLE_IS_FETCHINE,
  payload,
});

const setUserProfile = (payload) => ({
  type: ACTION_TYPES.SET_USER_PROFILE,
  payload,
});

const setUserData = (payload) => ({
  type: ACTION_TYPES.SET_USER_DATA,
  payload,
});

const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.apiGetUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    });
  };
};

const getFollowThunkCreator = (u) => {
  return (dispatch) => {
    usersAPI.apiPostUsers(u).then((response) => {

      if (response.data.resultCode === 0) {
        dispatch(follow(u.id));

      }
    })
  }
}

const getUnfollowThunkCreator = (u) => {
  return (dispatch) => {
    usersAPI.apiDeleteUsers(u).then((response) => {

      if (response.data.resultCode === 0) dispatch(unfollow(u.id));

    })
  }
}

const getAuthUserData =()=> (dispatch) => {
  usersAPI.authMe()
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(response.data.data));
    }
  });
}



export {
  addPostCreator,
  updateNewPostTextCreator,
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  setUserProfile,
  getUsersThunkCreator,
  getFollowThunkCreator,
  getUnfollowThunkCreator,
  getAuthUserData
};