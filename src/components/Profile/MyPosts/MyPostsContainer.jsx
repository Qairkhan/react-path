import React from "react";
import { connect } from "react-redux";

import { addPostCreator } from "../../../redux/actionCreators";

import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      const action = addPostCreator(newPostText);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
