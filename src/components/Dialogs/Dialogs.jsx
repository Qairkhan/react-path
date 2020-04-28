import React from "react";
import { Field, reduxForm } from "redux-form";

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

  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogsElements(usersData)}</div>
        <div className={s.messages}>{messagesElements(messagesData)}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Text" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
