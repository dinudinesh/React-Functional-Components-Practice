import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>My Name is Dinesh Singh</h1>
      <p>This is a React Functional Components Practice </p>
      <ul>
        <li>India</li>
        <li>USA</li>
        <li>UK</li>
      </ul>
    </div>
  );
}
ReactDOM.render(<MyInfo />, document.getElementById("root"));
