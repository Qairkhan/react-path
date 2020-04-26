import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import {ROUTES} from "./../../core/constants"

import { getUserProfile } from "../../redux/actionCreators";

import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 9;  
    this.props.getUserProfile(userId);
      
  }

  render() {
    if (!this.props.isAuth ) return <Redirect to={ROUTES.LOGIN}/>
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

const UrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  UrlDataContainerComponent
);
