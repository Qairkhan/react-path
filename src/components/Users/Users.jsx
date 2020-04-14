import React from "react";
import * as axios from "axios";

import photo000 from "../../assets/images/photo000.png";

import styles from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
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
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {this.getUsers()}
        <div>
          {pages.map((page) => {
            return (
              <span
                className={
                  this.props.currentPage === page && styles.selectedPage
                }
                onClick={(e) => {
                  this.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
