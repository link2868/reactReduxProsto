import React from "react";

import Post from "./Post/Post";

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
 
  const newPostText = props.newPostText
  // const refNewPost = React.createRef();

  const onAddNewPostMessage = () => {
    props.addProfilePost();
  };

  const onPostChange = (event) => {
    const text = event.target.value;
    props.updateNewPostText(text);
    // const action = {type: "UPDATE-NEW-POST-TEXT", newText: text }
  };
  
  return (
    <div className={style.myPostBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder="Додайте свій текст"
            onChange={onPostChange}
            value={newPostText}
            // ref={refNewPost}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddNewPostMessage}>Add post</button>
        </div>
      </div>
      <div className={style.post}>{postElement}</div>
    </div>
  );
};
export default MyPosts;


