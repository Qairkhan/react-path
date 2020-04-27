import React from "react";

import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component{
  render() {
  return (
    <div >
      <div><span>{this.props.status}</span></div>
      <div><input value={this.props.status} /></div>
    </div>
  );
}
};

export default ProfileStatus;
