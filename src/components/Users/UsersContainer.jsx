import React from "react";
import { connect } from "react-redux";

import {
  updateUnfollowStatusAC,
  updateFollowStatusAC,
  setUsersAC,
} from "../../redux/actionCreators";

import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(updateFollowStatusAC(userId));
    },
    unfollow: (userId) => {
      dispatch(updateUnfollowStatusAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
