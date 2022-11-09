import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = (props) => {
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
      <span className={styles.spanCount}>
        todo count: {props.filteredTodos || 0}
      </span>
    </div>
  );
};

export default Navbar;
