import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Nav from "./Nav";

function Header() {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logoContainer}>
          <span className="material-symbols-outlined">ramen_dining</span>
          <h2 className={classes.logo}>HomeMADE App</h2>
        </div>
      </NavLink>
      <Nav />
    </header>
  );
}

export default Header;
