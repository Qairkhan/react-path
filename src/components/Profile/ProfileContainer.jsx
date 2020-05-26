import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { updateStatus, getStatus, savePhoto, saveProfile } from "../../redux/actionCreators";
import { getUserProfile } from "../../redux/actionCreators";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const DEFAULT_USER_ID = 7238; //this.props.autorizedUserId; (должен подтягивать из state.auth.userId)
    const userId = this.props.match.params.userId || DEFAULT_USER_ID;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
