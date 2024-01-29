import React from "react";

import style from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={style.loaderContainer}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Preloader;
