import React from "react";
import ava from "../../../img/photo.jpg";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.profile__info}>
      <div className={classes.profile__ava}>
        <img src={ava} alt='' />
      </div>

      <ul className={classes.profile__descr}>
        <li className={(classes.profile__name, classes.profile__item)}>
          Oleg L.
        </li>
        <li className={(classes.profile__data, classes.profile__item)}>
          Data of Birth: <span>6 june</span>
        </li>
        <li className={(classes.profile__city, classes.profile__item)}>
          City: <span>Abakan</span>
        </li>
        <li className={(classes.profile__education, classes.profile__item)}>
          Education: <span>BSU'11</span>
        </li>
        <li className={(classes.profile__site, classes.profile__item)}>
          Web Site: <span>https://vs.com</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
