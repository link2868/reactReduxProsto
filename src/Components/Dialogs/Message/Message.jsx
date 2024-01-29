import React from "react";
import smile from "../../../img/avatar/smile.png";
import style from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={style.message}>
      <div>
        <div className={style.dialogSmile}>
          <img src={smile} alt="smile" />
        </div>
        <div className={style.dialogSmileName}>
          <span>My</span>
        </div>
      </div>
      <div className={style.dialogTxt}>
        <span>{props.message}</span>
      </div>
    </div>
  );
};

export default Message;
