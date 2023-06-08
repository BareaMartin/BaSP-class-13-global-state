import { addTodo } from "../../redux/Todos/todos.actions";

const getTodos = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/todos/success");
    if (response.status === 200) {
      const data = await response.json();
      console.log("data", data);
      dispatch(addTodo(data));
    } else {
      throw new Error("There was an error at fetching users");
    }
  } catch (err) {
    throw new Error("Ups!");
  }
};

const postTodo = async (dispatch, todoDescription) => {
  try {
    const response = await fetch("http://localhost:4000/todos/success", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        description: todoDescription,
      }),
    });
    if (response.status === 201) {
      const data = await response.json();
      console.log("data", data);
    } else {
      throw new Error("There was an error at posting user");
    }
  } catch (err) {
    throw new Error("Ups!");
  }
};

export { postTodo, getTodos };
