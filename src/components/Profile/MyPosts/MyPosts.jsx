import React from "react";

import Post from "./Post/Post";

import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
      <Post message="anti-mage the best"/>
      <Post message="Pa the best"/>
      </div>     
    </div>
  );
};

export default MyPosts;
