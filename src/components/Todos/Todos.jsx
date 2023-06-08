import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./todos.module.css";
import { toggleDone } from "../../redux/Todos/todos.actions";
import { getTodos, postTodo } from "../../redux/Todos/todos.thunks";

const Todos = () => {
  const [todoDescription, setTodoDescription] = useState("");

  const todos = useSelector((state) => state.todos.list); // subscription to store
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTodoDescription(event.target.value);
  };

  // const getTodos = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4000/todos/success");
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       console.log("data", data);
  //       dispatch(addTodo(data));
  //     } else {
  //       throw new Error("There was an error at fetching users");
  //     }
  //   } catch (err) {
  //     throw new Error("Ups!");
  //   }
  // };

  // const postTodo = async (todoDescription) => {
  //   try {
  //     const response = await fetch("http://localhost:4000/todos/success", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         description: todoDescription,
  //       }),
  //     });
  //     if (response.status === 201) {
  //       const data = await response.json();
  //       console.log("data", data);
  //     } else {
  //       throw new Error("There was an error at posting user");
  //     }
  //   } catch (err) {
  //     throw new Error("Ups!");
  //   }
  // };
  useEffect(() => {
    getTodos(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      <input value={todoDescription} onChange={handleChange} />
      <button
        onClick={() =>
          todoDescription && dispatch(postTodo(dispatch, todoDescription))
        }
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
