import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { ROUTES } from "../../core/constants";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
  getFollowThunkCreator,
  getUnfollowThunkCreator,
} from "../../redux/actionCreators";
import photo000 from "../../assets/images/photo000.png";

import { Preloader } from "../common/Preloader/Preloader";

import { Users } from "./Users";

import styles from "./Users.module.css";

class APIUsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  getUserBtn = (u) => {
    return u.followed ? (
      <button onClick={() => this.props.getUnfollowThunkCreator(u)}>
        UnFollow
      </button>
    ) : (
      <button onClick={() => this.props.getFollowThunkCreator(u)}>
        Follow
      </button>
    );
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };

  getUser = (u) => {
    return (
      <div key={u.id}>
        <span>
          <div>
            <NavLink to={`${ROUTES.PROFILE}/${u.id}`}>
              <img
                src={u.photos.small != null ? u.photos.small : photo000}
                className={styles.avatar}
              />
            </NavLink>
          </div>
          <div>{this.getUserBtn(u)}</div>
        </span>
        <span>
          <span>
            <div>{u.name}</div> <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>
    );
  };

  getUsers = () => {
    return this.props.users.map(this.getUser);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          getUsers={this.getUsers}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage: state.findUsersPage.currentPage,
    isFetching: state.findUsersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
  getFollowThunkCreator,
  getUnfollowThunkCreator,
})(APIUsersContainer);

export default UsersContainer;
