import React from "react";

import ACTION_TYPES from "../../../redux/actionTypes";

import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  console.log("mypostcontainer", props);
  const { state, dispatch } = props;
  const { profilePage } = state;
  const { postsData, newPostText } = profilePage;

  const newPostElement = React.createRef();

  const creatPost = () => {
    dispatch({ type: ACTION_TYPES.ADD_POST });
  };

  const onPostChange = (text) => {
    const action = { type: ACTION_TYPES.UPDATE_NEW_POST_TEXT, payload: text };
    dispatch(action);
  };

  return (
    <MyPosts
      onPostChange={onPostChange}
      creatPost={creatPost}
      postsData={postsData}
      newPostText={newPostText}
    />
  );
};
export default MyPostsContainer;
