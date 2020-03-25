import React from "react";

import s from "./Post.module.css";

const AVATAR_LINK = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/86/86ee5650444ed1a82866aea7e6ce7e86aa3d560d_full.jpg"

const Post = () => {
  return (
    <div className={s.item}>
      <img src={AVATAR_LINK} className={s.itemImg}/>
      post 1<div>Like</div>
    </div>
  );
};

export default Post;
