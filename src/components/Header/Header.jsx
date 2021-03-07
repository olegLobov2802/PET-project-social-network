import React from "react";
import logo from "../../img/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.header__row}>
          <img src={logo} alt='#' className={classes.header__logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
