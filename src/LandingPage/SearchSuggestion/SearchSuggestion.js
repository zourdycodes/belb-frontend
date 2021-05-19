import React from "react";
import styles from "./SearchSuggestion.module.css";

const SearchSuggestion = () => {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className={`fas fa-utensils ${styles["search-icon"]}`}></i>
      </span>{" "}
      <span className={styles["suggestion__text"]}>Restaurant</span>
      <span className="icon is-small">
        <i className={`fas fa-cocktail ${styles["search-icon"]}`}></i>
      </span>{" "}
      <span className={styles["suggestion__text"]}>Nightlife</span>
      <span className="icon is-small">
        <i className={`fas fa-concierge-bell ${styles["search-icon"]}`}></i>
      </span>{" "}
      <span className={styles["suggestion__text"]}>Services</span>
      <span className="icon is-small">
        <i className={`fas fa-truck ${styles["search-icon"]}`}></i>
      </span>{" "}
      <span className={styles["suggestion__text"]}>Delivery Service</span>
    </div>
  );
};

export default SearchSuggestion;
