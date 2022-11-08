import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.container}>
        <img
          className={styles.logo}
          alt="#"
          src={`${process.env.PUBLIC_URL}/rocket-logo-883f208f5b6a41d21540cfecae22fa07.png`}
        />
        <span className={styles.title}>RADIUM ROCKET</span>
      </div>
    </header>
  );
};

export default Header;
