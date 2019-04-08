/*const element = document.createElement("h1");
element.innerText = "Hello, Platzi Badges!";

const container = document.getElementById("app");

container.appendChild(element);
*/
import React from "react";
import ReactDOM from "react-dom";

const jsx = <h1>Hello Platzi Badges!</h1>;
const element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Hola soy los children"
);
const container = document.getElementById("app");

//ReactDOM.render(Que, DONDE)
ReactDOM.render(element, container);