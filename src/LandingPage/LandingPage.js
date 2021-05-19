import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../assets/logo-belb.png";
import styles from "./LandingPage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestion from "./SearchSuggestion/SearchSuggestion";

const LandingPage = () => {
  return (
    //* TODO change later
    <div className={styles.landing}>
      <div>
        <TopNav />
        <div className={styles["search-area"]}>
          <img src={logo} alt="logo-belb-frontend" className={styles.logo} />
          <SearchBar />
          <SearchSuggestion />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
