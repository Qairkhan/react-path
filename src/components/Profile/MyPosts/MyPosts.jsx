import React from "react";

import Post from "./Post/Post";
import { I18N } from "../../core/constants";
import {addPost} from "../../redux/State";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    const postsElements = props.posts.postsData.map ( post => 
    <Post message={post.message} likeCounts={post.likesCount} />
  );
  const newPostElement = React.createRef();

  const creatPost = () => {
    const text = newPostElement.current.value;
    addPost(text);
  }

  return (
    <div className={s.postsBlock}>
      {I18N.EN.USER_POST}
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick = {creatPost} >{I18N.EN.ADDPOST}</button>
      </div>
      <div className={s.posts}>
        {postsElements}        
      </div>
    </div>
  );
};

export default MyPosts;
