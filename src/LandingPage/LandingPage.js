import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../assets/logo-belb.png";
import styles from "./LandingPage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestion from "./SearchSuggestion/SearchSuggestion";
import useRouter from "use-react-router";

const LandingPage = () => {
  const { history } = useRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    //* TODO change later
    <div className={styles.landing}>
      <div>
        <TopNav />
        <div className={styles["search-area"]}>
          <img src={logo} alt="logo-belb-frontend" className={styles.logo} />
          <SearchBar search={search} />
          <SearchSuggestion />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
