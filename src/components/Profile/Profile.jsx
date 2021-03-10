import React from "react";
import ProfilePostContainer from "./ProfilePost/ProfilePostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = () => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo />

      <ProfilePostContainer />
    </div>
  );
};

export default Profile;
