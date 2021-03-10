import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";
import ProfilePost from "./ProfilePost";

const ProfilePostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let profilePage = store.getState().profilePage;
        let onAddPost = () => {
          store.dispatch(addPostAC());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextAC(text));
        };
        return (
          <ProfilePost
            onAddPost={onAddPost}
            onPostChange={onPostChange}
            profilePage={profilePage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ProfilePostContainer;
