import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  //*  check for different pages (size of search NavBar)
  const sizeClass = props.small ? "" : "is-medium";
  return (
    <div className={`field has-addons ${styles["search__container"]}`}>
      <p className="control">
        <button className={`button is-static ${sizeClass}`}>Search</button>
      </p>
      <p className="control">
        <input
          //! USING INTERPOLATION with BACKTICK
          className={`input ${sizeClass} ${styles["input-control"]}`}
          type="text"
          placeholder="Search Your Spot"
        />
      </p>
      <p className="control">
        <button className={`button is-static ${sizeClass}`}>NEAR</button>
      </p>
      <p className="control">
        <input
          //! USING INTERPOLATION with BACKTICK
          className={`input ${sizeClass} ${styles["input-control"]}`}
          type="text"
          placeholder="Search Near You!"
        />
      </p>
      <button className={`button ${sizeClass} ${styles["search-button"]}`}>
        <span className="icon is-small">
          <i className={`fas fa-search ${styles["search-icon"]}`}></i>
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
