import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">
          <Link to="/">{title}</Link>
        </h1>

        <Link className="header__plus" to="/create-recipe">
          <FaPlus />
        </Link>
      </div>
    </header>
  );
}
