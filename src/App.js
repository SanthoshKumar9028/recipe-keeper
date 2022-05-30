import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import CreateRecipe from "./CreateRecipe";
import Recipes from "./Recipes";
import UpdateRecipe from "./UpdateRecipe";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const handleOnRecipeCreate = (data) => {
    setRecipes([data, ...recipes]);
  };

  const handleOnRecipeUpdate = (data) => {
    const foundIndex = recipes.findIndex((recipe) => recipe.id === data.id);

    if (foundIndex !== -1) {
      const newRecipes = [...recipes];
      newRecipes[foundIndex] = data;
      setRecipes(newRecipes);
    }
  };

  const handleOnRecipeDelete = (id) => {
    const filteredRecipe = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipe);
  };

  return (
    <BrowserRouter>
      <Header title="Recipes" />
      <Routes>
        <Route
          path="/"
          element={
            <Recipes
              dataSource={recipes}
              onRecipeDelete={handleOnRecipeDelete}
            />
          }
        />
        <Route
          path="/create-recipe"
          element={<CreateRecipe onRecipeCreate={handleOnRecipeCreate} />}
        />
        <Route
          path="/update-recipe/:id"
          element={
            <UpdateRecipe
              recipes={recipes}
              onRecipeUpdate={handleOnRecipeUpdate}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
