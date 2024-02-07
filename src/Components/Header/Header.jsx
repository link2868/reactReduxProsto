import React from "react";
import { NavLink } from "react-router-dom";

import logoImg from "../../img/logo.png";
import photos from "../../img/avatar/user.png";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div>
        <img src={logoImg} alt="" />
      </div>
      {props.resultAuth ? (
        <div className={style.authContainer}>
          <div className={style.photoUser}>
            {props.photos === null ? (
              <img className={style.photoUserNull} src={photos} alt="" />
            ) : (
              <img src={props.photos} alt="" />
            )}
          </div>
          <div className={style.loginUser}>{props.login}</div>
        </div>
      ) : (
        <NavLink to="/login">
          <div className={style.login}>Login</div>
        </NavLink>
      )}
    </div>
  );
};

export default Header;
