import { useState } from "react";

import Header from "./Header";
import CreateRecipe from "./CreateRecipe";
import Recipes from "./Recipes";

export default function App() {
  const [recipes, setRecipes] = useState([
    { id: "1", title: "Sample Recipe", steps: "1. First step" },
  ]);

  const handleOnRecipeCreate = (data) => {
    setRecipes([data, ...recipes]);
  };

  return (
    <div>
      <Header title="Recipes" />
      <CreateRecipe onRecipeCreate={handleOnRecipeCreate} />
      <Recipes dataSource={recipes} />
    </div>
  );
}
