import React from "react";

import { dialogsElements, messagesElements } from "./DialogItem/DialogItem";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { dialogsPage, updateNewMessageBody, sendMessage } = props;
  const { messagesData, usersData, newMessageBody } = dialogsPage;

  const onSendMessageClicks = () => {
    sendMessage();
  };

  const onSendMessageChange = (e) => {
    const body = e.target.value;
    updateNewMessageBody(body);
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
          <button onClick={onSendMessageClicks}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
