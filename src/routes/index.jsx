import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Todos from "../components/Todos/Todos";

const Router = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/todos" component={() => <Todos />} />
      </Switch>
    </MainLayout>
  );
};

export default Router;