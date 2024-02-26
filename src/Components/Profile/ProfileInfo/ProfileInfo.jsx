import React from "react";

import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

import photoProfile from "../../../img/profile-photo.jpeg";
import photoLarge from "../../../img/avatar/user.png";

import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onFotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img src={photoProfile} alt="" />
      </div>
      <ProfileStatus
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <div className={style.descriptionBlock}>
        <h3>{props.profile.aboutMe}</h3>
        <div className={style.photosDownloads}>
          <div className={style.photosDownloadsImg}>
            <img
              className={style.photos}
              src={props.profile.photos.large || photoLarge}
              alt=""
            />
          </div>
          <div className={style.photosDownloadsInput}>
            {props.isOwner && (
              <input
                type="file"
                onChange={onFotoSelected}
              />
            )}
          </div>
        </div>
        <div>
          {props.profile.lookingForAJob ? (
            props.profile.lookingForAJobDescription
          ) : (
            <span>Не шукаю роботу</span>
          )}
        </div>
        <div className={style.contacts}>
          <h4>Мої контакти:</h4>
          <div>
            <span className={style.contactsTitle}>facebook:</span>{" "}
            <a
              href={`https://${props.profile.contacts.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.profile.contacts.facebook}
            </a>
          </div>
          <div>
            <span className={style.contactsTitle}>website:</span>{" "}
            <a
              href={`https://${props.profile.contacts.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.profile.contacts.website}
            </a>
          </div>
          <div>
            <span className={style.contactsTitle}>instagram:</span>{" "}
            <a
              href={`https://${props.profile.contacts.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.profile.contacts.instagram}
            </a>
          </div>
          <div>
            <span className={style.contactsTitle}>github:</span>{" "}
            <a
              href={`https://${props.profile.contacts.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.profile.contacts.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
