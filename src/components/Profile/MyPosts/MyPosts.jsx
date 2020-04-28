import React from "react";
import { Field, reduxForm } from "redux-form";
import { I18N } from "../../../core/constants";
import {
  required,
  maxLenghtCreator,
} from "../../../utils/validation/validators";

import { TextareaCastom } from "../../common/FormsControls/FormsControls";

import Post from "./Post/Post";

import s from "./MyPosts.module.css";

const maxLenght10 = maxLenghtCreator(10);

const MyPosts = (props) => {
  const { profilePage, addPost } = props;
  const { postsData } = profilePage;

  const postsElements = postsData.map((post) => (
    <Post message={post.message} likeCounts={post.likesCount} />
  ));

  const onAddPost = (values) => {
    addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>{I18N.EN.USER_POST}</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={TextareaCastom}
          required={[required, maxLenght10]}
          placeholder="SYUDA PIWI"
        />
      </div>
      <div>
        <button>{I18N.EN.ADDPOST}</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
