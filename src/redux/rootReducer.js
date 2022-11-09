import { combineReducers } from "redux";

import todosReducer from "./Todos/todos.reducer";

const rootReducer = combineReducers({
  todos: todosReducer, // state.todos
  // users: todosReducer,
});

export default rootReducer;
