/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Router from "./routes";
import { v4 as uuid } from "uuid";

const App = () => {
  // add state here
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      description: "do laundry",
      done: false,
    },
  ]);

  const filteredTodos = todos.filter((t) => t.done === false).length;

  const addTodo = (description) => {
    if (description) {
      setTodos((prevState) => {
        return [
          ...prevState,
          {
            id: uuid(),
            description: description,
            done: false,
          },
        ];
      });
      return;
    }
    alert("nope");
  };

  const toggleDone = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        return t.id === todo.id
          ? { id: t.id, description: t.description, done: !t.done }
          : t;
      });
    });
  };

  return (
    <Router
      todos={todos}
      filteredTodos={filteredTodos}
      addTodo={addTodo}
      toggleDone={toggleDone}
    />
  );
};

export default App;
