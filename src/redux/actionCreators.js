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

const updateFollowStatusAC = (payload) => ({
  type: ACTION_TYPES.FOLLOW_TO_USER,
  payload,
});

const updateUnfollowStatusAC = (payload) => ({
  type: ACTION_TYPES.UNFOLLOW_TO_USER,
  payload,
});

const setUsersAC = (users) => ({ type: ACTION_TYPES.SET_USERS, users });

const setCurrentPageAC = (currentPage) => ({
  type: ACTION_TYPES.SET_CURRENT_PAGE,
  currentPage,
});

const setTotalUsersCountAC = (totalUsersCount) => ({
  type: ACTION_TYPES.SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

const toggleIsFetchingAC = (isFetching) => ({
  type: ACTION_TYPES.TOGGLE_IS_FETCHINE,
  isFetching,
});

export {
  addPostCreator,
  updateNewPostTextCreator,
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
  updateUnfollowStatusAC,
  updateFollowStatusAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
};
