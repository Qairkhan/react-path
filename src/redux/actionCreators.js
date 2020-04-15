import ACTION_TYPES from "./actionTypes";

const addPostCreator = () => ({ type: ACTION_TYPES.ADD_POST });

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

const updateSendMessageCreator = () => ({ type: ACTION_TYPES.SEND_MESSAGE });

const follow = (payload) => ({
  type: ACTION_TYPES.FOLLOW_TO_USER,
  payload,
});

const unfollow = (payload) => ({
  type: ACTION_TYPES.UNFOLLOW_TO_USER,
  payload,
});

const setUsers = (payload) => ({ type: ACTION_TYPES.SET_USERS, payload });

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
};
