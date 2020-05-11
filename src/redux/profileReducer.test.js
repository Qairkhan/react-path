import React from "react";
import { render } from "@testing-library/react";

import profileReducer from "./profileReducer";
import { addPostCreator } from "./actionCreators";

test("rnew post", () => {
  const action = addPostCreator("newPostText");
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
  const newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(6);
});
