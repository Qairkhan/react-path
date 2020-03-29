import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.posts} 
        addPost={props.addPost} 
        newPostText={props.posts.newPostText} 
        updateNewPostText={props.updateNewPostText}
      />;
    </div>
  );
};

export default Profile;
