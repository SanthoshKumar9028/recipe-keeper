import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const container = React.createElement(
  "div",
  null,
  React.createElement("h1", { className: "title" }, "Hello world"),
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "item1"),
    React.createElement("li", null, "item2"),
    React.createElement("li", null, "item3")
  )
);

root.render(container);
