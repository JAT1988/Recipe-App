import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import SearchRecipe from "./Components/SearchRecipe";
import AddRecipe from "./Components/AddRecipe";
import RandomMeal from "./Components/RandomMeal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="SearchRecipe" Component={SearchRecipe} />
        <Route path="RandomMeal" Component={RandomMeal} />
        <Route path="AddRecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
