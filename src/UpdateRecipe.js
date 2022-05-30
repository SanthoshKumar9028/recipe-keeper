import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateRecipe({ onRecipeUpdate, recipes }) {
  const { id } = useParams();
  const navigation = useNavigate();

  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");

  const handleOnClick = () => {
    onRecipeUpdate({ id, title, steps });
    navigation("/");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
  };

  const found = recipes.find((recipe) => recipe.id === id);

  useEffect(() => {
    if (found) {
      setTitle(found.title);
      setSteps(found.steps);
    }
  }, [found]);

  if (!found) {
    return <h2 className="create-recipe__not-found">Recipe Not Found</h2>;
  }

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
        Update Recipe
      </button>
    </div>
  );
}

export default UpdateRecipe;
