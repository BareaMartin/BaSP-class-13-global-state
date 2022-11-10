import { useEffect, useState } from "react";
import styles from "./users.module.css";

const Users = () => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/users/success");
      if (response.status === 200) {
        const data = await response.json();
        setUsers(data.data);
        setError("");
        setIsLoading(false);
      } else {
        throw new Error("There was an error at fetching users");
      }
    } catch (err) {
      setUsers([]);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const postUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/users/success", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
        }),
      });
      if (response.status === 201) {
        const data = await response.json();
        console.log("data", data);

        setUsers([...users, data.data]);
      } else {
        throw new Error("There was an error at posting user");
      }
    } catch (err) {
      setUsers([]);
      setError(err.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => userName && postUser(userName)}>Add</button>
        {isLoading ? (
          "Loading..."
        ) : (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {error && <div className={styles.errorContainer}>{error}</div>}
    </>
  );
};

export default Users;
