import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./todos.module.css";
import { addTodo, toggleDone } from "../../redux/Todos/todos.actions";

const Todos = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTodoDescription(event.target.value);
  };

  const todos = useSelector((state) => state.todos.list); // subscription to store

  return (
    <div className={styles.container}>
      <input value={todoDescription} onChange={handleChange} />
      <button
        onClick={() => todoDescription && dispatch(addTodo(todoDescription))}
      >
        Add
      </button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td onClick={() => dispatch(toggleDone(todo))}>
                  {todo.done ? "done" : "todo"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
