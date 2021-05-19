import React from "react";
import styles from "./Subnav.module.css";
import SubnavItem from "./SubNavItem/SubnavItem";

const Subnav = () => {
  return (
    <div className={styles.container}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubnavItem label="Restaurant" icon="fa-utensils" />
          <SubnavItem label="Home Services" icon="fa-home" />
          <SubnavItem label="Auto Services" icon="fa-car-battery" />
          <SubnavItem label="More" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          <button
            className={`button ${styles["subnav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen"></i>
            </span>
            <span>Write a Review</span>
          </button>

          <button className={`button ${styles["subnav-button"]}`}>
            <span className="icon">
              <i className="fas fa-hotel "></i>
            </span>
            <span>For Businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
