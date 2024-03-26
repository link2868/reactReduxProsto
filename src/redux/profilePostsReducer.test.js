import profilePostsReducer, {
  addProfilePostActionCreator,
  deletePost,
} from "./profilePostsReducer";
// import ReactDOM from "react-dom";
// import App from "../App";
// import React from "react";
// import axios from "axios";

const state = {
  posts: [
    { id: 1, message: "Я вивчаю React", likesCount: 5 },
    { id: 2, message: "Сподіваюся, що все вийде", likesCount: 3 },
    { id: 3, message: " Як справи? ", likesCount: 0 },
    { id: 4, message: " Що нового?", likesCount: 0 },
  ],
};

it("length of new post should be 5", () => {
  const action = addProfilePostActionCreator("Тестування модулів");
  const newState = profilePostsReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be Тестування модулів", () => {
  const action = addProfilePostActionCreator("Тестування модулів");
  const newState = profilePostsReducer(state, action);
  expect(newState.posts[4].message).toBe("Тестування модулів");
});

it("length of posts after delete should be 3", () => {
  const action = deletePost(1);
  const newState = profilePostsReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("length of posts after delete incorrect id should be 4", () => {
  const action = deletePost(10);
  const newState = profilePostsReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
