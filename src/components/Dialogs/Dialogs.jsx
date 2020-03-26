import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../core/constants";

import s from "./Dialogs.module.css";

const DialogItem = props => {
  let path = ROUTES.MESSAGES + "/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.dialogs}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: "Mukha" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Belyi" },
    { id: 4, name: "Mysyk" },
    { id: 5, name: "Alina" }
  ];

  let messagessData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Salem alem" },
    { id: 3, message: "4to tam" },
    { id: 4, message: "Da nu" },
    { id: 5, message: "Realno?" }
  ];

  let dialogsElements = dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messagessData.map(m => (
    <Message message={m.message} />
  ));

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
