import React from "react";
import { NavLink } from "react-router-dom";

import style from './Dialog.module.css';

const Dialog = (props) => {
  let path = '/dialogs/' + props.id; 
  

  return (
    <div className={style.dialog + ' ' + style.active}>
      <div >
        <img src={props.avatar} alt="" />
      </div>
      <div className={ style.name}  >
        <NavLink to={path} className={({ isActive }) => (isActive ? style.active : "")}>{props.name}</NavLink>
      </div> 
    </div>
  )
}

export default Dialog