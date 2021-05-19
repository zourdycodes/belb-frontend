import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo-belb.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className={styles["nav-bar"]}>
      <img
        className={styles.logo}
        src={logo}
        alt="belb-frontend website search your spot logo"
      />
      <SearchBar />
      <button className={`button ${styles["nav-button"]}`}>Sign in</button>
      <button className={`button ${styles["nav-button"]}`}>Register</button>
    </div>
  );
};

export default Navbar;
