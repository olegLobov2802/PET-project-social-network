import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Frends from "./Frends/Frends";

const Navbar = ({ sidebar }) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__column}>
        <nav className={classes.navbar__menu}>
          <ul className={classes.navbar__items}>
            <li className={classes.navbar__item}>
              <NavLink
                to='/profile'
                activeClassName={classes.activeLink}
                className={classes.navbar__link}>
                Profile
              </NavLink>
            </li>
            <li className={classes.navbar__item}>
              <NavLink
                to='/dialogs'
                activeClassName={classes.activeLink}
                className={classes.navbar__link}>
                Messages
              </NavLink>
            </li>
            <li className={classes.navbar__item}>
              <NavLink
                to='/news'
                activeClassName={classes.activeLink}
                className={classes.navbar__link}>
                News
              </NavLink>
            </li>
            <li className={classes.navbar__item}>
              <NavLink
                to='/music'
                activeClassName={classes.activeLink}
                className={classes.navbar__link}>
                Music
              </NavLink>
            </li>
            <li className={classes.navbar__item}>
              <NavLink
                to='/setting'
                activeClassName={classes.activeLink}
                className={classes.navbar__link}>
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        <Frends sidebar={sidebar} />
      </div>
    </div>
  );
};

export default Navbar;
