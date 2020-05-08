import React from "react";

import s from "./ProfileStatus.module.css";

const ProfileStatusWithHook = (props) => {
  renderViewMode = () => (
    <div>
      <span onDoubleClick={this.activeteEditMode}>
        {this.props.status || "----"}
      </span>
    </div>
  );

  renderEditMode = () => (
    <div>
      <input
        onChange={this.onStatusChange}
        autoFocus={true}
        onBlur={this.deactiveteEditMode}
        value={this.state.status}
      />
    </div>
  );

  renderMode = () =>
    this.state.editMode ? this.renderEditMode() : this.renderViewMode();

  render() {
    return <div>{this.renderMode()}</div>;
  }
}

export default ProfileStatusWithHook;
