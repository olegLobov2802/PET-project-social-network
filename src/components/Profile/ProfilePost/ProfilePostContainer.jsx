import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import ProfilePost from "./ProfilePost";

const ProfilePostContainer = ({ store }) => {
  let onAddPost = () => {
    store.dispatch(addPostAC());
  };

  let onPostChange = (text) => {
    store.dispatch(updateNewPostTextAC(text));
  };

  let profilePage = store.getState().profilePage;

  return (
    <ProfilePost onAddPost={onAddPost} onPostChange={onPostChange} profilePage={profilePage} />
  );
};

export default ProfilePostContainer;
