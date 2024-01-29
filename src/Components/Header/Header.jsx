import React from "react";
import logoImg from "../../img/logo.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <header >
        <img src={logoImg} alt="" />
      </header>
    </div>
  );
};

export default Header;
