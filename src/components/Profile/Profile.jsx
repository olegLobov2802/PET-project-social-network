import React from "react";
import ProfilePostContainer from "./ProfilePost/ProfilePostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ profilePage, dispatch, store }) => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo />

      <ProfilePostContainer store={store} profilePage={profilePage} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
