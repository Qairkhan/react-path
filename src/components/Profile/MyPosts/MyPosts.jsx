import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";

import { I18N } from "../../../core/constants";
import {
  required,
  maxLenghtCreator,
} from "../../../utils/validation/validators";

import { TextareaCustom } from "../../common/FormsControls/FormsControls";

import Post from "./Post/Post";

import s from "./MyPosts.module.css";

const maxLenght10 = maxLenghtCreator(10);

class MyPosts extends PureComponent {
  onAddPost = (values) => {
    this.props.addPost(values.newPostText);
  };

  postsElements = this.props.profilePage.postsData.map((post) => (
    <Post message={post.message} likeCounts={post.likesCount} />
  ));

  render() {
    return (
      <div className={s.postsBlock}>
        <h3>{I18N.EN.USER_POST}</h3>
        <AddNewPostFormRedux onSubmit={this.onAddPost} />
        <div className={s.posts}>{this.postsElements}</div>
      </div>
    );
  }
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={TextareaCustom}
          required={[required, maxLenght10]}
          placeholder="SYUDA PIWI" //добавить предупреждение МАХдлины
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
