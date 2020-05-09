import React, { useState } from "react";

import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activeteEditMode = () => {
    setEditMode(true);
  };

  const deactiveteEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  let renderViewMode = () => (
    <div>
      <span onDoubleClick={activeteEditMode}>{props.status || "----"}</span>
    </div>
  );

  let renderEditMode = () => (
    <div>
      <input
        onChange={onStatusChange}
        autoFocus={true}
        onBlur={deactiveteEditMode}
        value={status}
      />
    </div>
  );

  let renderMode = () => (editMode ? renderEditMode() : renderViewMode());

  return <div>{renderMode()}</div>;
};

export { ProfileStatusWithHooks };
