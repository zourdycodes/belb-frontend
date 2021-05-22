import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  //* HOOKS --> state
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  function submit(e) {
    e.preventDefault();
    if (typeof props.search === "function") {
      props.search(term, location);
    }
    console.log(term, location);
  }

  //*  check for different pages (size of search NavBar)
  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={submit}>
      <div className={`field has-addons ${styles["search__container"]}`}>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>Search</div>
        </div>
        <p className="control">
          <input
            //! USING INTERPOLATION with BACKTICK
            onChange={(e) => setTerm(e.target.value)}
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={term}
            placeholder="Search Your Spot"
          />
        </p>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>NEAR</div>
        </div>
        <p className="control">
          <input
            //! USING INTERPOLATION with BACKTICK
            onChange={(e) => setLocation(e.target.value)}
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={location}
            placeholder="Search Near You!"
          />
        </p>
        <button
          className={`button ${sizeClass} ${styles["search-button"]}`}
          onClick={submit}
        >
          <span className="icon is-small">
            <i className={`fas fa-search ${styles["search-icon"]}`}></i>
          </span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
