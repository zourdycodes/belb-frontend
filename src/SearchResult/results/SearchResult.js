import React from "react";
import BusinessRating from "../../Rating/BusinessRating";
import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
  const b = props.businesses;
  if (!props.businesses) {
    return <div></div>;
  }

  const tags = b.categories.map((category) => (
    <span className={`tag ${styles.space}`} key={b.id + category.title}>
      {category.title}
    </span>
  ));

  const addressLines = b.location.display_address.map((add) => (
    <p key={b.id + add}>{add}</p>
  ));

  return (
    <div className={styles["search-result"]}>
      <img
        className={styles["business-image"]}
        src={props.businesses.image_url}
        alt="businesss"
      />
      <div className={styles["content-result"]}>
        <div className={styles["business-info"]}>
          <h2 className="subtitle">{props.businesses.name}</h2>
          {/* <p>⭐⭐⭐⭐⭐</p> */}
          <BusinessRating
            reviewCount={props.businesses.review_count}
            rating={props.businesses.rating}
          />
          <p>
            {props.businesses.price} {tags}
          </p>
        </div>
        <div className={styles["contact-info"]}>
          <p>{props.businesses.phone}</p>
          {addressLines}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
