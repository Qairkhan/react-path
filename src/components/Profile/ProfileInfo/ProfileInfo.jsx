import React from "react";

import { Preloader } from "../../common/Preloader/Preloader";

import ProfileStatus from "./ProfileStatus/ProfileStatus";

import s from "./ProfileInfo.module.css";

const PROFILE_LINK =
  "https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <div>
        <img src={PROFILE_LINK} className={s.contentImg} />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava+description
      </div>
      <ProfileStatus status={props.status}/>
    </div>
  );
};

export default ProfileInfo;
