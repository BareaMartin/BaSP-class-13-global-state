import { useState } from "react";
import styles from "./todos.module.css";
import { v4 as uuid } from "uuid";

const Todos = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      description: "do laundry",
      done: false,
    },
  ]);

  const filteredTodos = todos.filter((t) => t.done === false).length;

  const handleChange = (event) => {
    setTodoDescription(event.target.value);
  };

  const addTodo = () => {
    if (todoDescription) {
      setTodos((prevState) => {
        return [
          ...prevState,
          {
            id: uuid(),
            description: todoDescription,
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
    <div className={styles.container}>
      <span className={styles.spanCount}>todo count: {filteredTodos}</span>
      <input value={todoDescription} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
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
                <td onClick={() => toggleDone(todo)}>
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
