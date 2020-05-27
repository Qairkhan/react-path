import React from "react";
import { Field, reduxForm } from "redux-form";

import { required } from "../../utils/validation/validators";

import { TextareaCustom } from "../common/FormsControls/FormsControls";

import { dialogsElements, messagesElements } from "./DialogItem/DialogItem";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  const { dialogsPage, sendMessage } = props;
  const { messagesData, usersData } = dialogsPage;

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
        <Field
          component={TextareaCustom}
          name="newMessageBody"
          placeholder="Text"
          required={[required]}
        />
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
