import React from "react";

import s from "./ProfileInfo.module.css";

const PROFILE_LINK =
  "https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg";

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={PROFILE_LINK} className={s.contentImg} />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
