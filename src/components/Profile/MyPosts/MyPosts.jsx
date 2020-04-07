import React from "react";

import { I18N } from "../../../core/constants";
import ACTION_TYPES from "../../../redux/actionTypes";

import Post from "./Post/Post";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const{profilePage, dispatch} = props;
  const {postsData, newPostText} = profilePage;
  const postsElements = postsData.map((post) => (
    <Post message={post.message} likeCounts={post.likesCount} />
  ));
  const newPostElement = React.createRef();

  const creatPost = () => {
    // const text = newPostElement.current.value;
    dispatch({ type: ACTION_TYPES.ADD_POST });
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = { type: ACTION_TYPES.UPDATE_NEW_POST_TEXT, payload: text };
    dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>{I18N.EN.USER_POST}</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={newPostText}
        ></textarea>
      </div>
      <div>
        <button onClick={creatPost}>{I18N.EN.ADDPOST}</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
