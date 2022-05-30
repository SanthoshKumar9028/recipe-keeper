import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Recipes from "./Recipes";

function CreateRecipe() {
  const [recipes, setRecipes] = useState([
    { id: "1", title: "Sample Recipe", steps: "1. First step" },
  ]);
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");

  const handleOnClick = () => {
    setRecipes([{ id: uuid(), title, steps }, ...recipes]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
  };

  return (
    <div className="create-recipe container">
      <input
        className="create-recipe__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="title"
      />
      <textarea
        className="create-recipe__steps"
        value={steps}
        onChange={handleStepsChange}
        placeholder="N. Step N"
        rows={5}
      />
      <button className="create-recipe__create-btn" onClick={handleOnClick}>
        Create Recipe
      </button>

      <Recipes dataSource={recipes} />
    </div>
  );
}

export default CreateRecipe;
