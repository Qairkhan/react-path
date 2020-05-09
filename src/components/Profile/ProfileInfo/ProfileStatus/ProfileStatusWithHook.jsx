import React from "react";
import { useState } from "react";

import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);


  let activeteEditMode = () => {
    setEditMode(true);
  };

  let deactiveteEditMode = () => {
    setEditMode(false);
    // props.updateStatus(this.state.status);
  };

  let renderViewMode = () => (
    <div>
      <span onDoubleClick={activeteEditMode}>
        {props.status || "----"}
      </span>
    </div>
  );

  let renderEditMode = () => (
    <div>
      <input
        onChange={onStatusChange}
        autoFocus={true}
        onBlur={deactiveteEditMode}
        value={state.status}
      />
    </div>
  );

  let renderMode = () =>
    editMode ? renderEditMode() : renderViewMode();

  
    return (
    <div>{renderMode()}</div>
    )
  
}

export {ProfileStatusWithHooks};
