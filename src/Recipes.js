import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Recipe({ id, title, steps, onRecipeDelete }) {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const handleOnClick = () => {
    setIsDeleteClicked(true);
    setTimeout(() => onRecipeDelete(id), 160);
  };

  return (
    <section className={`recipe ${isDeleteClicked ? "hide" : ""}`}>
      <h2 className="recipe__title">{title}</h2>
      <p>Steps</p>
      <blockquote>
        <pre>{steps}</pre>
      </blockquote>
      <div className="recipe__actions">
        <Link to={`/update-recipe/${id}`}>
          <FaEdit />
        </Link>
        <FaTrash onClick={handleOnClick} />
      </div>
    </section>
  );
}

export default function Recipes({ dataSource, onRecipeDelete }) {
  return (
    <div className="container">
      {dataSource.map((recipe) => {
        return (
          <Recipe key={recipe.id} onRecipeDelete={onRecipeDelete} {...recipe} />
        );
      })}
    </div>
  );
}
