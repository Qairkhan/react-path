import React from "react";

import Post from "./Post/Post";
import { I18N } from "../../core/constants";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, message: "anti-mage the best", likesCount: 9343 },
    { id: 2, message: "Salem alem", likesCount: 9333 },
    { id: 3, message: "asdasd" },
    { id: 4, message: "asdasd" },
    { id: 5, message: "asdasdasd" }
  ];

  let postsElements = postsData.map ( p => 
    <Post message={p.message} likeCounts={p.likesCount} />
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
