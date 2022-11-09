import { ADD_TODO, TOGGLE_DONE } from "./todos.types";

export const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: description,
  };
};

export const toggleDone = (todo) => {
  return {
    type: TOGGLE_DONE,
    payload: todo,
  };
};
