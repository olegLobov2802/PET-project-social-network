import React from "react";
import ProfilePost from "./ProfilePost/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBg from "./ProfileBg/ProfileBg";

const Profile = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <div>
      <ProfileBg />

      <ProfileInfo />

      <ProfilePost profilePage={profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />
    </div>
  );
};

export default Profile;
