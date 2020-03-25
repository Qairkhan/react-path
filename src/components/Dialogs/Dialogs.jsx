import React from "react";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>
          <div className={s.dialog + ' ' + s.active}>
            1
           </div>
          <div className={s.dialog}>
            2
           </div>
          <div className={s.dialog}>
            3
           </div>
          <div className={s.dialog}>
            4
           </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>
            2
            </div>
          <div className={s.message}>
            3
            </div>
          <div className={s.message}>
            4
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;