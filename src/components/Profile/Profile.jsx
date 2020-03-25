import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const ProfileLink = "https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg"

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={ProfileLink} />
      </div>
      <div>ava+despriction</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
