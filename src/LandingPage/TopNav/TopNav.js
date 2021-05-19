import React from "react";
import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles.left}>
        <span>Write a review</span>
        <span>Events</span>
      </div>
      <div className={styles.right}>
        <span>Login</span>
        <button className="button is-info is-outlined">Sign up</button>
      </div>
    </div>
  );
};

export default TopNav;
