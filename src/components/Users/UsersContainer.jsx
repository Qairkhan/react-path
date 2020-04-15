import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/actionCreators";

import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import photo000 from "../../assets/images/photo000.png";

import styles from "./Users.module.css";

class APIUsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onClickFollow = (id) => this.props.follow(id);
  onClickUnfollow = (id) => this.props.unfollow(id);

  getUserBtn = (u) => {
    return u.followed ? (
      <button onClick={() => this.onClickUnfollow(u.id)}>UnFollow</button>
    ) : (
      <button onClick={() => this.onClickFollow(u.id)}>Follow</button>
    );
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  getUser = (u) => {
    return (
      <div key={u.id}>
        <span>
          <div>
            <img
              src={u.photos.small != null ? u.photos.small : photo000}
              className={styles.avatar}
            />
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
})(APIUsersContainer);

export default UsersContainer;
