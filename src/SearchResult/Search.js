import React from "react";
import Navbar from "../NavBar/Navbar";
import Subnav from "../NavBar/SubNav/Subnav";
// import styles from "./Search.module.css";
import SearchResults from "./SearchResults";
import SearchResultSummary from "./SearchResultSummary";
import useRouter from "use-react-router";

const Search = () => {
  const { location } = useRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");

  return (
    <div>
      <Navbar term={term} location={locationParam} />
      <Subnav />
      <SearchResultSummary term={term} location={locationParam} />
      <SearchResults />
    </div>
  );
};

export default Search;
