import React, { useState, useEffect } from "react";

import photo000 from "../../../assets/images/photo000.png";

import { Preloader } from "../../common/Preloader/Preloader";

import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHook";
import { ProfileDescriptionFormReduxForm } from "./ProfileDescriptionForm";

import s from "./ProfileInfo.module.css";

const PROFILE_LINK =
  "https://animal-wallpaper.com/wallpaper/minimalist-background-hd-For-Background-HD-Wallpaper.jpg";

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

const ProfileDescription = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div onClick={goToEditMode}>
          <button>edit</button>
        </div>
      )}{" "}
      <div>
        <b>Full Name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>{" "}
      {profile.lookingForAJob && (
        <div>
          {" "}
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}{" "}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
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
      {editMode ? (
        <ProfileDescriptionFormReduxForm
          initialValues={props.profile}
          profile={props.profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileDescription
          goToEditMode={() => {
            setEditMode(true);
          }}
          isOwner={props.isOwner}
          profile={props.profile}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
