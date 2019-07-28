import React from "react";
import Todo from "../components/Todo";
import Likes from "../components/Likes";
import NotFoundPage from "../components/NotFoundPage";
import LocalStorage from "../components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const TodoRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route path="/likesApp" component={Likes} />
      <Route path="/localStorage" component={LocalStorage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default TodoRouter;
