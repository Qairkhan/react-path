import React from "react";

import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== prevState.status) {
  //     this.setState({
  //       status: this.props.status,
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeteEditMode}>
              {this.props.status || "----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              // ref={this.statusInputRef}
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactiveteEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
