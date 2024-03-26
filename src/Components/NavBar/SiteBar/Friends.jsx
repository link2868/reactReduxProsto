import React from "react";
import style from "./Friends.module.css";


export const Friends = (props) => {
 
  return (
    <div className={style.friendsWrapper}>
      <div className={style.descFriends}>
        <img src={props.avatar} alt="No avatar" />
        <div className={style.friendName}>{props.name}</div>
      </div>
    </div>
  );
};

const FriendsElements = (props) => {
   
  return(
  props.sitebar.friends.map((elem) => (
    <Friends key={ elem.id} name={elem.name} avatar={elem.avatar} />
  ))
  )
}

export default FriendsElements
