import React from "react";
import { render } from "@testing-library/react";

import profileReducer from "./profileReducer";
import { addPostCreator, deletePost } from "../actionCreators";

const state = {
  postsData: [
    { id: 1, message: "anti-mage the best", likesCount: 9343 },
    { id: 2, message: "Salem alem", likesCount: 9333 },
    { id: 3, message: "asdasd" },
    { id: 4, message: "asdasd" },
    { id: 5, message: "asdasdasd" },
  ],
  profile: null,
  status: "",
};

test("rnew post", () => {
  const action = addPostCreator("newPostText");
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(6);
});

test("deletePOst", () => {
  const action = deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});
