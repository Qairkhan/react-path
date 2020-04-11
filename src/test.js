const action = {
  type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
  payload: "",
};

const actionCreator = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
    payload: payload,
  };
};

// dispatch(action);
dispatch(actionCreator(10));
