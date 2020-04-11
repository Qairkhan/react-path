import React from "react";

import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/actionCreators";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
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
