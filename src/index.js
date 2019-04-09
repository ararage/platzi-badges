import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Global.css";
import BadgeNew from "./pages/BadgeNew";
import Badges from "./components/Badges";

const container = document.getElementById("app");

//ReactDOM.render(Que, DONDE)
ReactDOM.render(<Badges />, container);
