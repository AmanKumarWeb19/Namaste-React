import React from "react";
import ReactDOM from "react-dom/client";



// React Element=>

const jsxElement = <h1 className="heading">Namaste React using JSX</h1>;

// React Functional Component =>

const number = 10000;

const Title = () => {
  return <h1>Title Component</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {jsxElement}
    <h1 className="heading">
      Namaste React Functional component without return{" "}
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);