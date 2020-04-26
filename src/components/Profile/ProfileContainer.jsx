import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUserProfile } from "../../redux/actionCreators";
import { usersAPI } from "../../api/api";

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

const UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  UrlDataContainerComponent
);
