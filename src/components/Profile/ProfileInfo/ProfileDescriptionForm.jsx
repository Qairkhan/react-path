import React, { useState, useEffect } from "react";
import { reduxForm } from "redux-form";

import {
  createField,
  Input,
  TextArea,
} from "../../common/FormsControls/FormsControls";

const ProfileDescriptionForm = ({ handleSubmit, profile }) => {
  const arr = Object.keys(profile.contacts);
  const mapContacts = (key) => {
    //   return (
    //     <Contact
    //       key={key}
    //       contactTitle={key}
    //       contactValue={profile.contacts[key]}
    //     />
    //   );
  };
  const profileContacts = arr.map(mapContacts);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Full Name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>{" "}
      <div>
        {" "}
        <b>My professional skills:</b>
        {createField(
          "JobDescription",
          "lookingForAJobDescription",
          [],
          TextArea
        )}
      </div>
      <div>
        <b>About me:</b> {createField("aboutMe", "aboutMe", [], TextArea)}
      </div>
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
