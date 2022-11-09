import React from "react";
import styles from "./section.module.css";

const Section = ({ body, toggleDone, addTodo, todos }) => {
  console.log({ toggleDone, addTodo, todos });
  const newBody = React.cloneElement(body, {
    ...body.props,
    toggleDone,
    addTodo,
    todos,
  });
  return <div className={styles.sectionContainer}>{newBody}</div>;
};

export default Section;
