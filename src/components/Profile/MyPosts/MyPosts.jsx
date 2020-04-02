import React from "react";

import Post from "./Post/Post";
import { I18N } from "../../core/constants";

import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    const postsElements = props.posts.postsData.map ( post => 
    <Post message={post.message} likeCounts={post.likesCount} />
  );
  const newPostElement = React.createRef();

  const creatPost = () => {
    // const text = newPostElement.current.value;
    props.dispatch({type: 'ADD-POST'});
  }

  const onPostChange =() => {
    let text = newPostElement.current.value;
    const action = ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    props.despatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>{I18N.EN.USER_POST}</h3>
      <div>
        <textarea onChange ={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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
