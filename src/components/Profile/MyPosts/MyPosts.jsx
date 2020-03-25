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
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
