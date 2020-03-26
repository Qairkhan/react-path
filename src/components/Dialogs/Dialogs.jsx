import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../core/constants";

import s from "./Dialogs.module.css";

const DialogItem = props => {
  let path = ROUTES.MESSAGES + '/' + props.id;

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
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <DialogItem name="Mukha" id="1" />
          <DialogItem name="Dima" id="2" />
          <DialogItem name="Belyi" id="3" />
          <DialogItem name="Mysyk" id="4" />
          <DialogItem name="Alina" id="5" />
        </div>
        <div className={s.messages}>
          <Message message="Hi" />
          <Message message="Salem alem" />
          <Message message="4to tam" />
          <Message message="Da nu" />
          <Message message="Realno?" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
