import React from "react";
import classes from "./AddRecipe.module.css";

function AddRecipe() {
  return (
    <div className={classes.container}>
      <h1>Add new recipe</h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="19"
          rows="8"
        ></textarea>
        <label htmlFor="image">Image</label>
        <input type="text" name="image" />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="description"
          id="description"
          cols="19"
          rows="8"
        ></textarea>

    <div className={classes.ingredients}>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" /> 
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" name="ingredient" />
    </div>
    <button className={classes.addbtn} type="submit">Add Recipe</button>

      </form>
    </div>
  );
}

export default AddRecipe;
