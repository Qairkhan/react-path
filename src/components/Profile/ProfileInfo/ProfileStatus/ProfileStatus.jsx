import React from "react";

import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    // status: "Hello World",
  };

  activeteEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactiveteEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeteEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactiveteEditMode}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
