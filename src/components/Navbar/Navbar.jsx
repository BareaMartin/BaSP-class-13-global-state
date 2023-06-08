import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const todosCount = useSelector((state) => {
    return state.todos.list.filter((t) => !t.done).length;
  }); // subscription to store that filters the todos and gets the length

  return (
    <div className={styles.navBarContainer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
      <span className={styles.spanCount}>todo count: {todosCount || 0}</span>
    </div>
  );
};

export default Navbar;
