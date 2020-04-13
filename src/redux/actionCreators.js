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

const updateFollowStatusAC = (userId) => ({
  type: ACTION_TYPES.FOLLOW_TO_USER,
  userId,
});

const updateUnfollowStatusAC = (userId) => ({
  type: ACTION_TYPES.UNFOLLOW_TO_USER,
  userId,
});

const setUsersAC = (users) => ({ type: ACTION_TYPES.SET_USERS, users });

export {
  addPostCreator,
  updateNewPostTextCreator,
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
  updateUnfollowStatusAC,
  updateFollowStatusAC,
  setUsersAC,
};
