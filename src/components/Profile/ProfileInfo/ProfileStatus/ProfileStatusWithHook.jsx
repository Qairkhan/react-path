import React, { useState, useEffect } from "react";

import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

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

  const renderViewMode = () => (
    <div>
      <span onDoubleClick={activeteEditMode}>{props.status || "----"}</span>
    </div>
  );

  const renderEditMode = () => (
    <div>
      <input
        onChange={onStatusChange}
        autoFocus={true}
        onBlur={deactiveteEditMode}
        value={status}
      />
    </div>
  );

  const renderMode = () => (editMode ? renderEditMode() : renderViewMode());

  return <div><b>Status:</b>{renderMode()}</div>;
};

export { ProfileStatusWithHooks };
