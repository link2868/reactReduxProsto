import React from "react";
import { NavLink } from "react-router-dom";

import url from "../../img/avatar/smile.png";

import style from "./Users.module.css";

const Users = (props) => {
  
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.userWrapper}>
      <h3>Users</h3>
      {props.users.map((user) => (
        <div className={style.container} key={user.id}>
          <div className={style.avatar}>
            <NavLink to={'/profile/' + user.id}>
              <div className={style.photos}>
                {user.photos.small != null ? (
                  <img src={user.photos.small} alt="" />
                ) : (
                  <img src={url} alt="" />
                )}
              </div>
            </NavLink>
            <div className={style.fullowUnFullow}>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(user.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={style.informationStatusCuntainer}>
            <div className={style.information}>
              <div className={style.name}>
                <div>{user.name}</div>
              </div>
              <div className={style.location}>
                <div className={style.country}>user.location.country</div>
                <div className={style.city}>user.location.city</div>
              </div>
            </div>
            <div className={style.status}>
              <div>{user.status}</div>
            </div>
          </div>
        </div>
      ))}
      <div className={style.pagination}>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={
                props.currentPage === page
                  ? style.paginationNumber + " " + style.active
                  : style.paginationNumber
              }
              onClick={() => {
                props.setCurrentPage(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
