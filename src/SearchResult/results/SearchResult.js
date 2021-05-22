import React from "react";
import BusinessRating from "../../Rating/BusinessRating";
import styles from "./SearchResult.module.css";

const SearchResult = () => {
  return (
    <div className={styles["search-result"]}>
      <img
        className={styles["business-image"]}
        src="https://via.placeholder.com/210"
        alt="business image - search results"
      />
      <div className={styles["content-result"]}>
        <div className={styles["business-info"]}>
          <h2 className="subtitle">Burger Place</h2>
          {/* <p>⭐⭐⭐⭐⭐</p> */}
          <BusinessRating />
          <p>
            $$ <span className="tag">Burgers</span>{" "}
            <span className="tag">Fast Food</span>
          </p>
        </div>
        <div className={styles["contact-info"]}>
          <p>+46 79341633</p>
          <p>Example street, RO</p>
          <p>12345 Brasov</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
