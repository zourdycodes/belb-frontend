import React from "react";
import SearchResult from "./results/SearchResult";
import styles from "./SearchResults.module.css";

const SearchResults = (props) => {
  if (!props.businesses || !props.businesses.length) {
    return <div></div>;
  }

  const searchResult = props.businesses.map((b) => (
    <SearchResult key={b.id} businesses={b} />
  ));

  return (
    <div className={styles["search-results"]}>
      {searchResult}
      {/* <SearchResult />
      <SearchResult />
      <SearchResult /> */}
    </div>
  );
};

export default SearchResults;
