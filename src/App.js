import Header from "./Header";
import Recipes from "./Recipes";

export default function App() {
  return (
    <div>
      <Header title="Recipes" />
      <Recipes
        dataSource={[
          {
            id: "1",
            title: "First recipe",
            steps: "1. First",
          },
          {
            id: "2",
            title: "Second recipe",
            steps: "1. Second",
          },
        ]}
      />
    </div>
  );
}
