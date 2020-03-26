import React from "react";

import Post from "./Post/Post";
import { I18N } from "../../core/constants";

import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      {I18N.EN.USER_POST}
      <div>
        <textarea></textarea>
        <button>{I18N.EN.ADDPOST}</button>
      </div>
      <div className={s.posts}>
        <Post message="anti-mage the best" likeCounts="9343" />
        <Post message="Pa the best" likeCounts="9333" />
      </div>
    </div>
  );
};

export default MyPosts;
