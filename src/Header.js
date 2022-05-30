export default function Header({ title }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">
          <a href="/">{title}</a>
        </h1>
      </div>
    </header>
  );
}
