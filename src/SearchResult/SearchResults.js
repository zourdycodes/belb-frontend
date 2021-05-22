import React from "react";
import SearchResult from "./results/SearchResult";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  return (
    <div className={styles["search-results"]}>
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  );
};

export default SearchResults;
