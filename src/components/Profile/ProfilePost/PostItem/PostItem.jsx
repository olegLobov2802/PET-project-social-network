import React from "react";
import ava from "../../../../img/photo.jpg";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <li className={classes.post__item}>
      <div className={classes.post__logo}>
        <img src={ava} alt='' />
      </div>

      <div className={classes.post__text}>{props.message}</div>
      <button className={classes.post__like}>{props.like}</button>
    </li>
  );
};

export default PostItem;
