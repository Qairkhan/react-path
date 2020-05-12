import { usersAPI } from "../api/api";

import ACTION_TYPES from "./actionTypes";

const addPostCreator = (newPostText) => ({
  type: ACTION_TYPES.ADD_POST,
  newPostText,
});

const deletePost = (payload) => ({
  type: ACTION_TYPES.DELETE_POST,
  payload,
});

const updateSendMessageCreator = (newMessageBody) => ({
  type: ACTION_TYPES.SEND_MESSAGE,
  newMessageBody,
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
  payload,
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

const setStatus = (payload) => ({
  type: ACTION_TYPES.SET_STATUS,
  payload,
});

const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage([currentPage]));
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
    });
  };
};

const getUnfollowThunkCreator = (u) => {
  return (dispatch) => {
    usersAPI.apiDeleteUsers(u).then((response) => {
      if (response.data.resultCode === 0) dispatch(unfollow(u.id));
    });
  };
};

const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

const getStatus = (userId) => {
  return (dispatch) => {
    usersAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

const updateStatus = (status) => {
  return (dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export {
  addPostCreator,
  deletePost,
  updateSendMessageCreator,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
  getFollowThunkCreator,
  getUnfollowThunkCreator,
  getUserProfile,
  updateStatus,
  getStatus,
  setUserData,
};
