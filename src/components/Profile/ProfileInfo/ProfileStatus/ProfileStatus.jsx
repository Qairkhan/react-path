import React from "react";

import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    // status: "Hello World",
  };

  activeteEditMode = () => {
    this.setState({
      editMode: true
    })
    this.state.editMode = true;

  }

  render() {
    return (
      <div>
        {! this.state.editMode && (
          <div>
            <span onDoubleClick = {this.activeteEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
