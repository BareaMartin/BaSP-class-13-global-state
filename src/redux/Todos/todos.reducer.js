import { ADD_TODO, TOGGLE_DONE } from "./todos.types";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = {
  list: [
    {
      id: uuid(),
      description: "do laundry",
      done: false,
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log("action ADD_TODO", action.payload);
      return {
        ...state,
        list: [
          ...state.list,
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
      const newList = state.list.map((t) => {
        return t.id === action.payload.id
          ? { id: t.id, description: t.description, done: !t.done }
          : t;
      });
      return {
        ...state,
        list: [...newList],
      };
    }

    default:
      return state;
  }
};

export default reducer;
