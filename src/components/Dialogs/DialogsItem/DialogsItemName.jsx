import React from "react";
import classes from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <li className={classes.users__item}>
      <NavLink to={path} activeClassName={classes.users__active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogsItem;
