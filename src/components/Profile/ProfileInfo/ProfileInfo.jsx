import React from "react";

import photo000 from "../../../assets/images/photo000.png";

import { Preloader } from "../../common/Preloader/Preloader";

import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHook";

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
        <img src={props.profile.photos.large || photo000} className={s.avatar} />
        ava+description
      </div>
      <ProfileStatusWithHooks
        status={`${props.status}`}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
