import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import A from "./assignment1/A";
import Likes from "./components/Likes";
import Todo from "./components/Todo";
import TodoRouter from "./routes/TodoRouter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TodoRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
