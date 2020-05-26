import React, { useState, useEffect } from "react";
import {
  createField,
  Input,
  TextArea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDescriptionForm = ({ profile }) => {
  return (
    <form>
      <div onClick={() => {}}>
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
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          //   return (
          //     <Contact
          //       key={key}
          //       contactTitle={key}
          //       contactValue={profile.contacts[key]}
          //     />
          //   );
        })}
      </div>
    </form>
  );
};

const ProfileDescriptionFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDescriptionForm
);

export { ProfileDescriptionFormReduxForm };
