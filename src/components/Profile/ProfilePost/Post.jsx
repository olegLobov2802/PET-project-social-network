import React from "react";
import PostItem from "./PostItem/PostItem";
import classes from "./Post.module.css";

const Post = ({ profilePage }) => {

  const addPost = () => {
    const newPost = {
      id: 5,
      messages: profilePage.newPostText,
      like: 0,
    };

    profilePage.postData.push(newPost);
  };

  const updateNewPostText = (e) => {
    const text = e.target.value;
    profilePage.newPostText = text;
  };

  let postsElements = profilePage.postData.map((post) => (
    <PostItem message={post.messages} like={post.like} />
  ));

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

export default Post;
