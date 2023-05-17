import React from "react";
import Video from "./Video";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={classes.home}>
      <Video />
      <div className={classes.menu}>
        <div className={classes.box}>
          <h4>Browse Recipes</h4>
          <p>Search for your favorite recipe</p>
          <NavLink to="/SearchRecipe">Search All Recipes</NavLink>
        </div>
        <div className={classes.box}>
          <h4>Add New Recipe</h4>
          <p>Add a recipe from your own country</p>
          <NavLink to="/AddRecipe">Add New Recipe</NavLink>
        </div>
        <div className={classes.box}>
          <h4>Learn more about our projects</h4>
          <p>Visit our schools homepage</p>
          <a href="https://en.bc.fi/">BC Helsinki hompepage</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
