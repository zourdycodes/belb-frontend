import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={`field has-addons ${styles["search__container"]}`}>
      <p className="control">
        <button className="button is-static is-medium">Search</button>
      </p>
      <p className="control">
        <input
          //! USING INTERPOLATION with BACKTICK
          className={`input is-medium ${styles["input-control"]}`}
          type="text"
          placeholder="Search Your Spot is-medium"
        />
      </p>
      <p className="control">
        <button className="button is-static is-medium">NEAR</button>
      </p>
      <p className="control">
        <input
          //! USING INTERPOLATION with BACKTICK
          className={`input is-medium ${styles["input-control"]}`}
          type="text"
          placeholder="Search Near You!"
        />
      </p>
      <button className={`button is-medium ${styles["search-button"]}`}>
        <span className="icon is-small">
          <i className={`fas fa-search ${styles["search-icon"]}`}></i>
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
