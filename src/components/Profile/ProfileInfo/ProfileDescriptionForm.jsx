import React, { useState, useEffect } from "react";
import { reduxForm } from "redux-form";

import {
  createField,
  Input,
  TextArea,
} from "../../common/FormsControls/FormsControls";

const fullName = () => (
  <div>
    <b>Full Name:</b> {createField("Full name", "fullName", [], Input)}
  </div>
);

const forAJob = () => (
  <div>
    <b>Looking for a job:</b>
    {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
  </div>
);

const professionalSkills = () => (
  <div>
    <b>My professional skills:</b>
    {createField("JobDescription", "lookingForAJobDescription", [], TextArea)}
  </div>
);
const aboutMe = () => (
  <div>
    <b>About me:</b> {createField("aboutMe", "aboutMe", [], TextArea)}
  </div>
);

const ProfileDescriptionForm = ({ handleSubmit, profile }) => {
  const arr = Object.keys(profile.contacts);
  const mapContacts = (key) => {
    return (
      <div>
        <b>
          {" "}
          {key}: {createField(key, "contacts." + key, [], Input)}{" "}
        </b>
      </div>
    );
  };
  const profileContacts = arr.map(mapContacts);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {fullName()}
      {forAJob()}
      {professionalSkills()}
      {aboutMe()}
      <div>
        <b>Contacts:</b> {profileContacts}
      </div>
    </form>
  );
};

const ProfileDescriptionFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDescriptionForm
);

export { ProfileDescriptionFormReduxForm };
