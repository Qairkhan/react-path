import React from "react";

import photo000 from "../../../assets/images/photo000.png";

import { Preloader } from "../../common/Preloader/Preloader";

import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHook";

import s from "./ProfileInfo.module.css";

const PROFILE_LINK =
  "https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={s.content}>
      <div>
        <img src={PROFILE_LINK} className={s.contentImg} />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={props.profile.photos.large || photo000}
          className={s.avatar}
        />
        {<input type={"file"} onChange={onPhotoSelected} />}
      </div>
      <ProfileStatusWithHooks
        status={`${props.status}`}
        updateStatus={props.updateStatus}
      />
      <div>
        {" "}
        <div>
          <b>Looking for a job:</b>{" "}
          {props.profile.lookingForAJob ? "yes" : "no"}
        </div>{" "}
        {props.profile.lookingForAJob && (
          <div>
            {" "}
            <b>My professional skills:</b>
            {props.profile.lookingForAJobDescription}{" "}
          </div>
        )}
        <div>
          <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
          <b>Looking for a job:</b>{" "}
          {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
