import React from "react";
import PostItem from "./PostItem/PostItem";
import classes from "./Post.module.css";
import { addPostAC, updateNewPostTextAC } from "../../../redux/state";

const Post = ({ profilePage, dispatch }) => {
  let onAddPost = () => {
    dispatch(addPostAC())
  };

  let onPostChange = (e) => {
    let text = e.target.value
    dispatch(updateNewPostTextAC(text))
  }

  let postsElements = profilePage.postData.map((post) => (
    <PostItem key={post.id} message={post.messages} like={post.like} />
  ));

  return (
    <div className={(classes.profile__post, classes.post)}>
      <div>
        <div className={classes.post__title}>My Posts</div>
        <input
          className={classes.post__input}
          type='text'
          value={profilePage.newPostText}
          onChange={onPostChange}
        />
        <button onClick={onAddPost} className={classes.post__btn}>
          Send
        </button>
      </div>
      <ul className={classes.post__list}>{postsElements}</ul>
    </div>
  );
};

export default Post;
