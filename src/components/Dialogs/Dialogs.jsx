import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N, messagesElements, dialogsElements } from "../core/constants";

import s from "./Dialogs.module.css";

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
