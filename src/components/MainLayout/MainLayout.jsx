import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";
import styles from "./mainLayout.module.css";

const MainLayout = (props) => {
  return (
    // React.Fragment
    <>
      <Header />
      <div className={styles.navBarSectionContainer}>
        <Navbar />
        <Section body={props.children} />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
