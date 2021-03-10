import React from "react";
import PostItem from "./PostItem/PostItem";
import classes from "./Post.module.css";

const ProfilePost = ({ onAddPost, onPostChange, profilePage }) => {
  let postsElements = profilePage.postData.map((post) => (
    <PostItem key={post.id} message={post.messages} like={post.like} />
  ));

  let updateNewPostText = (e) => {
    let text = e.target.value;
    onPostChange(text);
  };

  let addPost = () => {
    onAddPost();
  };

  return (
    <div className={(classes.profile__post, classes.post)}>
      <div>
        <div className={classes.post__title}>My Posts</div>
        <input
          className={classes.post__input}
          type='text'
          value={profilePage.newPostText}
          onChange={updateNewPostText}
        />
        <button onClick={addPost} className={classes.post__btn}>
          Send
        </button>
      </div>
      <ul className={classes.post__list}>{postsElements}</ul>
    </div>
  );
};

export default ProfilePost;
