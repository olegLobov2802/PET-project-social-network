import React from "react";
import classes from "./Profile.module.css";
import ProfilePost from "./ProfilePost/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = () => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo />

      <ProfilePost />
    </div>
  );
};

export default Profile;
