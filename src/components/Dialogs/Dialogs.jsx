import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N} from "../core/constants";
import {dialogsData, messagesData} from "../core/mocks";

import s from "./Dialogs.module.css";

const DialogItem = props => {
  const way = ROUTES.MESSAGES + "/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={way}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.dialogs}>{props.message}</div>;
};

const dialogsElements = dialogsData.map(dialog => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

const messagesElements = messagesData.map(message => (
  <Message message={message.message} />
));

const Dialogs = props => {

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
