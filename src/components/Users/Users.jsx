import React from "react";
import * as axios from "axios";

import photo000 from "../../assets/images/photo000.png";

import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
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

  getUser = (u) => {
    return (
      <div key={u.id}>
        <span>
          <div>
            <img
              src={u.photos.small != null ? u.photos.small : photo000}
              className={s.avatar}
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
    return <div>{this.getUsers()}</div>;
  }
}

export default Users;
