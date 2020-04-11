import React from "react";

import { I18N } from "../../../core/constants";

import Post from "./Post/Post";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { profilePage, addPost, updateNewPostText } = props;
  const { postsData, newPostText } = profilePage;

  const postsElements = postsData.map((post) => (
    <Post message={post.message} likeCounts={post.likesCount} />
  ));
  const newPostElement = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
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
        <button onClick={onAddPost}>{I18N.EN.ADDPOST}</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
