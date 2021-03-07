import React from "react";
import classes from "./MessageItem.module.css";


const MessageItem = (props) => {
  return <li className={classes.message__item}>{props.text}</li>;
};

export default MessageItem;
