import React from "react";
import ReviewCard from "./ReviewCard";



function ReviewsList({ reviews }) {
  return (
    <ul className="reviewsList">
      {reviews.map((review) => {
        // console.log(plant);
        return (
          <ReviewCard key={review?.id}
            review={review}
          />
        );
      })}
    </ul>
  );
}

export default ReviewsList;
