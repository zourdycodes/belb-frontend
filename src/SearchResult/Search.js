import React from "react";
import Navbar from "../NavBar/Navbar";
import Subnav from "../NavBar/SubNav/Subnav";
// import styles from "./Search.module.css";
import SearchResults from "./SearchResults";
import SearchResultSummary from "./SearchResultSummary";
import useRouter from "use-react-router";
import { useBusinessSearch } from "../API/useBusinessSearch";

const Search = () => {
  const { location } = useRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [businesses, amountResults, searchParams, setSearchParams] =
    useBusinessSearch(term, locationParam);

  return (
    <div>
      <Navbar term={term} location={locationParam} />
      <Subnav />
      <SearchResultSummary
        term={term}
        location={locationParam}
        amountResults={amountResults}
        shownResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
};

export default Search;
