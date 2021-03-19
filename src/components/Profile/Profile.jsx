import React from "react";
import ProfilePostContainer from "./ProfilePost/ProfilePostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ profile }) => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo profile={profile} status={"status"} />

      <ProfilePostContainer />
    </div>
  );
};

export default Profile;
