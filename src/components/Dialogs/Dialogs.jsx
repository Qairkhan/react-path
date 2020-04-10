import React from "react";

import { dialogsElements, messagesElements } from "./DialogItem/DialogItem";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { dialogsPage, onSendMessageChange, onSendMessageClick } = props;
  const { messagesData, usersData, newMessageBody } = dialogsPage;

  const onSendMessageClicks = () => {
    onSendMessageClick();
  };

  const onSendMessageChanges = (e) => {
    const body = e.target.value;
    onSendMessageChange(body);
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
            onChange={onSendMessageChanges}
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
