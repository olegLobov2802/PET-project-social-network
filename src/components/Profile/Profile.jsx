import React from "react";
import classes from "./Profile.module.css";
import ProfilePost from "./ProfilePost/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ profilePage }) => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo />

      <ProfilePost profilePage={profilePage} />
    </div>
  );
};

export default Profile;
