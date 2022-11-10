import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Todos from "../components/Todos/Todos";
import Users from "../components/Users";

const Router = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/todos" component={() => <Todos />} />
        <Route path="/users" component={() => <Users />} />
      </Switch>
    </MainLayout>
  );
};

export default Router;
