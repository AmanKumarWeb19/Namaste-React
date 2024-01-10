import React from "react";
import ReactDOM from "react-dom/client";

// React Element=>

const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;

// React Functional Component =>

// const HeadingComponent = () => {
//   return <h1>Namaste React functional Component</h1>;
// };
const number = 10000;

const Title = () => {
  return <h1>Title Component</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{number}</h2>
    <h1 className="heading">
      Namaste React Functional component without return{" "}
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
