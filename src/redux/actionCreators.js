import ACTION_TYPES from "./actionTypes";

const addPostCreator = () => {
  return {
    type: ACTION_TYPES.ADD_POST,
  };
};

const updateNewPostTextCreator = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_NEW_POST_TEXT,
    payload,
  };
};

const updateNewMessageBodyCreator = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
  };
};

const updateSendMessageCreator = (payload) => {
  return {
    type: ACTION_TYPES.SEND_MESSAGE,
    payload,
  };
};

export {
  addPostCreator,
  updateNewPostTextCreator,
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
};
