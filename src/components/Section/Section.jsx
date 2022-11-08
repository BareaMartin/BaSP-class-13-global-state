import React from "react";
import styles from "./section.module.css";

const Section = (props) => {
  return <div className={styles.sectionContainer}>{props.body}</div>;
};

export default Section;
