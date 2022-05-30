import { FaEdit, FaTrash } from "react-icons/fa";

export function Recipe({ title, steps }) {
  return (
    <section className={`recipe`}>
      <h2 className="recipe__title">{title}</h2>
      <p>Steps</p>
      <blockquote>
        <pre>{steps}</pre>
      </blockquote>
      <div className="recipe__actions">
        <a href={`/update-recipe`}>
          <FaEdit />
        </a>
        <FaTrash />
      </div>
    </section>
  );
}

export default function Recipes({ dataSource }) {
  return (
    <div className="container">
      {dataSource.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />;
      })}
    </div>
  );
}
