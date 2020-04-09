import React from "react";

import { I18N } from "../../../core/constants";

import Post from "./Post/Post";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const { onPostChange, creatPost, postsData, newPostText } = props;

  const postsElements = postsData.map((post) => (
    <Post message={post.message} likeCounts={post.likesCount} />
  ));
  const newPostElement = React.createRef();

  const onAddPost = () => {
    creatPost();
  };

  const onPostChanges = () => {
    const text = newPostElement.current.value;
    onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>{I18N.EN.USER_POST}</h3>
      <div>
        <textarea
          onChange={onPostChanges}
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
