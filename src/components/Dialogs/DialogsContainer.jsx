import React from "react";

import ACTION_TYPES from "../../redux/actionTypes";

import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const { dialogsPage, dispatch } = props;

  const onSendMessageClick = () => {
    dispatch({ type: ACTION_TYPES.SEND_MESSAGE });
  };

  const onSendMessageChange = (body) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
      payload: body,
    });
  };

  return (
    <Dialogs
      onSendMessageChange={onSendMessageChange}
      onSendMessageClick={onSendMessageClick}
      dialogsPage={dialogsPage}
    />
  );
};

export default DialogsContainer;
