import React from "react";
import ProfilePost from "./ProfilePost/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ profilePage, dispatch }) => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo />

      <ProfilePost profilePage={profilePage} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
