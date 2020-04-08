import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../../../core/constants";

import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  const { id, name } = props;
  const way = `${ROUTES.MESSAGES}/${id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={way}>{name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  const { message } = props;
  return <div className={s.dialogs}>{message}</div>;
};

const dialogsElements = (usersData) =>
  usersData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

const messagesElements = (messagesData) =>
  messagesData.map((message) => <Message message={message.message} />);

export { dialogsElements, messagesElements };
