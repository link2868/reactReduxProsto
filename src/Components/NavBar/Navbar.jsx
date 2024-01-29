import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./SiteBar/FriendsContainer";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Messages
        </NavLink>
      </div>
       <div className={style.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={style.friendsWrapper}>
        <h3>Friends</h3>
        <div className={style.friendsElement}>
          <FriendsContainer />
        </div>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
