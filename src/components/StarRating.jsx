import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StarRating = ({ rating }) => {
  const stars = Math.round(rating / 2);
  return (
    <div className="star__rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={["fas", "star"]}
          style={{ color: star <= stars ? "red" : "gray" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
