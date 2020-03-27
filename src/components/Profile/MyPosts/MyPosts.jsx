import React from "react";

import Post from "./Post/Post";
import { I18N } from "../../core/constants";
import {postsData} from "../../core/mocks";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    const postsElements = postsData.map ( post => 
    <Post message={post.message} likeCounts={post.likesCount} />
  );

  return (
    <div className={s.postsBlock}>
      {I18N.EN.USER_POST}
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>{I18N.EN.ADDPOST}</button>
      </div>
      <div className={s.posts}>
        {postsElements}        
      </div>
    </div>
  );
};

export default MyPosts;
