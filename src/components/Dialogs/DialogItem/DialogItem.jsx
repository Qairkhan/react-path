import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../../../core/constants";

import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  console.log("props", props);
  const way = `${ROUTES.MESSAGES}/${props.id}`; // использовать destructuring
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={way}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialogs}>{props.message}</div>;
};

const dialogsElements = (usersData) =>
  usersData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

const messagesElements = (messagesData) =>
  messagesData.map((message) => <Message message={message.message} />);

export { dialogsElements, messagesElements };
