import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg" />
      </div>
      <div>ava+despriction</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
