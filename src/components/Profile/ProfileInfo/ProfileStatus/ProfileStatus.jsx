import React from "react";

import s from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  return (
    <div >
      <div><span>{props.status}</span></div>
      <div><input value={props.status} /></div>
    </div>
  );
};

export default ProfileStatus;
