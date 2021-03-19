import React from "react";
import ProfilePostContainer from "./ProfilePost/ProfilePostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ profile, profileStatus, updateStatus }) => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo profile={profile} profileStatus={profileStatus} updateStatus={updateStatus} />

      <ProfilePostContainer />
    </div>
  );
};

export default Profile;
