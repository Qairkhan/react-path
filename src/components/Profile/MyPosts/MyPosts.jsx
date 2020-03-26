import React from "react";

import Post from "./Post/Post";
import { I18N } from "../../core/constants";

import s from "./MyPosts.module.css";

const MyPosts = () => {

  let postData = [
    {id: 1 , message: 'anti-mage the best', likesCount:9343},
    {id: 2 , message: 'Salem alem', likesCount:9333},
    {id: 3 , message: 'asdasd'},
    {id: 4 , message: 'asdasd'},
    {id: 5 , message: 'asdasdasd'},
  ]

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
        <Post message={postData[0].message} likeCounts={postData[0].likesCount} />
        <Post message={postData[1].message} likeCounts={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
