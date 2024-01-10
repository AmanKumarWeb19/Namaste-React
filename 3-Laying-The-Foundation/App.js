import React from "react";
import ReactDOM from "react-dom/client";

// React Element=>

const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;

// React Component =>

const HeadingComponent = () => {
  return <h1>Namaste React functional Component</h1>;
};
const HeadingComponent2 = () => (
  <h1>Namaste React Functional component without return</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
