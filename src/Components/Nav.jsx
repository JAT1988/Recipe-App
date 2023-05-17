import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/SearchRecipe">Search Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/RandomMeal">Random Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/AddRecipe">Add New Recipe</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
