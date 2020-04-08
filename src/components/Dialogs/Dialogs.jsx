import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../../core/constants";
import ACTION_TYPES from "../../redux/actionTypes";

import { dialogsElements, messagesElements } from "./DialogItem/DialogItem";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { dialogsPage, dispatch } = props;
  const { messagesData, usersData, newMessageBody } = dialogsPage;

  const onSendMessageClick = () => {
    dispatch({ type: ACTION_TYPES.SEND_MESSAGE });
  };

  const onSendMessageChange = (e) => {
    const body = e.target.value;
    dispatch({
      type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
      payload: body,
    });
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogsElements(usersData)}</div>
        <div className={s.messages}>{messagesElements(messagesData)}</div>
      </div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onSendMessageChange}
            placeholder="Text"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
