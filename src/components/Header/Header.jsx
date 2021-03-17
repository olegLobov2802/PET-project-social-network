import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import classes from "./Header.module.css";

const Header = ({ authData }) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.header__row}>
          <img src={logo} alt='#' className={classes.header__logo} />
          <div>{!authData.isAuthorized ? <NavLink to='/login'>login</NavLink> : authData.email}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
