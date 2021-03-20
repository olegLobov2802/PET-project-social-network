import React from "react";
import ava from "../../../img/photo.jpg";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, profileStatus, updateStatus }) => {
  let contacts = profile.contacts;
  let contactsList = [];
  for (let item in contacts) {
    let contactsItem = `${item} - ${contacts[item]}`;
    if (contacts[item]) {
      contactsList.push(contactsItem);
    }
  }

  return (
    <div className={classes.profile__info}>
      <div>
        <div className={classes.profile__ava}>
          <img src={profile.photos.small || ava} alt="" />
        </div>
        <ProfileStatus status={profileStatus} updateStatus={updateStatus} />
      </div>

      <ul className={classes.profile__descr}>
        <li className={(classes.profile__name, classes.profile__item)}>{profile.fullName}</li>
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
          Web Site:
          <div className={classes.profile__contacts}>
            {contactsList.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
