import React, { useState, useCallback, useContext } from "react";
import classes from "./SearchRecipe.module.css";
import { myContext } from "../Context/Context";

const SearchRecipe = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (
    <div className={classes.searchContainer}>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search for meal name or ingredient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={classes.srchbtn} onClick={fetchMealsHandler}>
          Search Meal
        </button>
      </div>
      <div className={classes.searchedMeal}>
        {meals ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No meals found! Try another word... </h2>
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
