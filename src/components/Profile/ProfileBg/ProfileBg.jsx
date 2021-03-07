import React from "react";
import slide from "../../../img/slider_3.jpg";
import classes from "./ProfileBg.module.css";

const ProfileBg = () => {
  return (
    <div className={classes.profile__bg}>
      <img src={slide} alt='#' />
    </div>
  );
};

export default ProfileBg;
