import { ADD_TODO, TOGGLE_DONE } from "./todos.types";

export const addTodo = (list) => {
  return {
    type: ADD_TODO,
    payload: list,
  };
};

export const toggleDone = (todo) => {
  return {
    type: TOGGLE_DONE,
    payload: todo,
  };
};
