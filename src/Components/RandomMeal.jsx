import React, { useEffect, useContext } from "react";
import { myContext } from "../Context/Context";
import classes from "./RandomMeal.module.css";
const RandomMeal = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);
  return (
    <div className={classes.randomContainer}>
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className={classes.randomGrid}>
          <div className={classes.randomControls}>
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={fetchRandomMeal}> Generate Another Meal </button>
          </div>

          <div className={classes.instructions}>
            <h3>{meal.strMeal}</h3>
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>

            <div className={classes.ingredient}>
              <ul>
                <li>{meal.strIngredient1}</li>
                <li>{meal.strIngredient2}</li>
                <li>{meal.strIngredient3}</li>
                <li>{meal.strIngredient4}</li>
                <li>{meal.strIngredient5}</li>
                <li>{meal.strIngredient6}</li>
                <li>{meal.strIngredient7}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomMeal;
