import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { getUserProfile } from "../../redux/actionCreators";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 9;  
    this.props.getUserProfile(userId);
      
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);