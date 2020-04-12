import React from "react";

import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = updateNewPostTextCreator(text);
      dispatch(action);
    },

    addPost: () => {
      const action = addPostCreator();
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
