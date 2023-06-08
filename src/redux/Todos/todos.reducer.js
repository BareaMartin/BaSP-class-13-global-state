import { ADD_TODO, TOGGLE_DONE } from "./todos.types";

const INITIAL_STATE = {
  list: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log("action ADD_TODO", action.payload);
      return {
        ...state,
        list: action.payload,
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
