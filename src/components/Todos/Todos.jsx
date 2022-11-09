import { useState } from "react";
import styles from "./todos.module.css";

const Todos = (props) => {
  const [todoDescription, setTodoDescription] = useState("");

  const handleChange = (event) => {
    setTodoDescription(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input value={todoDescription} onChange={handleChange} />
      <button onClick={() => props.addTodo(todoDescription)}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {props.todos?.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td onClick={() => props.toggleDone(todo)}>
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
