import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import style from "./Profile.module.css";

const Profile = (props) => {
   
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile } />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
