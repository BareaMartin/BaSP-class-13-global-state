import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Todos from "../components/Todos/Todos";

const Router = ({ todos, filteredTodos, addTodo, toggleDone }) => {
  // pass props to Todos
  return (
    <MainLayout filteredTodos={filteredTodos}>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route
          path="/todos"
          component={() => (
            <Todos
              todos={todos}
              filteredTodos={filteredTodos}
              addTodo={addTodo}
              toggleDone={toggleDone}
            />
          )}
        />
      </Switch>
    </MainLayout>
  );
};

export default Router;
