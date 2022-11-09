import { ADD_TODO, TOGGLE_DONE } from "./todos.types";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = {
  todos: [
    {
      id: uuid(),
      description: "do laundry",
      done: false,
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log("reducer activated");

  switch (action.type) {
    case ADD_TODO: {
      console.log("action ADD_TODO", action.payload);
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuid(),
            description: action.payload,
            done: false,
          },
        ],
      };
    }

    case TOGGLE_DONE: {
      console.log("action TOGGLE_DONE", action.payload);
      const newTodos = state.todos.map((t) => {
        return t.id === action.payload.id
          ? { id: t.id, description: t.description, done: !t.done }
          : t;
      });
      return {
        ...state,
        todos: [...newTodos],
      };
    }

    default:
      return state;
  }
};

export default reducer;
