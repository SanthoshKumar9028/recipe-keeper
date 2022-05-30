import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CreateRecipe({ onRecipeCreate }) {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");

  const handleOnClick = () => {
    onRecipeCreate({ id: uuid(), title, steps });
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
    </div>
  );
}

export default CreateRecipe;
