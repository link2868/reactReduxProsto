import React from "react";

import photoProfile from "../../../img/profile-photo.jpeg";

import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src={photoProfile} alt="" />
      </div>
      <div className={ style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo
