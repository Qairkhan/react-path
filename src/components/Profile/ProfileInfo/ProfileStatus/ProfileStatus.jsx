import React from "react";

import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
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

  // componentDidUpdate(prevProps, prevState) {   //componentDidUpdate будет реальзован в будущем
  //   if (prevProps.status !== prevState.status) {
  //     this.setState({
  //       status: this.props.status,
  //     });
  //   }
  // }

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

export default ProfileStatus;
