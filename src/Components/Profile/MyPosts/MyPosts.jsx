import React from "react";

import Post from "./Post/Post";
import MyPostsReduxForm from "./MyPostsForm/MyPostsForm";
import style from "./MyPosts.module.css";



const MyPosts = (props) => {
  // const state = props.profilePostsPage;

  const postElement = props.posts.map((elem) => (
    <Post
      key={ elem.id}
      message={elem.message}
      likesCount={elem.likesCount}
    />
  ));
 
  // const newPostText = props.newPostText

  const onAddNewPostMessage = (value) => {
    props.addProfilePost(value.newPost);
  };

  // const onPostChange = (event) => {
  //   const text = event.target.value;
  //   props.updateNewPostText(text);
  // };
  
  return (
    <div className={style.myPostBlock}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={onAddNewPostMessage} />
      <div className={style.post}>{postElement}</div>
    </div>
  );
};

export default MyPosts;


