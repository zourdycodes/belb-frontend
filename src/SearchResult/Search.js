import React from "react";
import Navbar from "../NavBar/Navbar";
import Subnav from "../NavBar/SubNav/Subnav";
// import styles from "./Search.module.css";
import SearchResults from "./SearchResults";
import SearchResultSummary from "./SearchResultSummary";

const Search = () => {
  return (
    <div>
      <Navbar />
      <Subnav />
      <SearchResultSummary />
      <SearchResults />
    </div>
  );
};

export default Search;
