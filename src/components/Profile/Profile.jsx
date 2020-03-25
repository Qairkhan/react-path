import React from "react";

import MyPosts from "./MyPosts/MyPosts";

import s from "./Profile.module.css";

const PROFILE_LINK = "https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg"

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={PROFILE_LINK} className={s.contentImg} />
      </div>
      <div>ava+despriction</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
