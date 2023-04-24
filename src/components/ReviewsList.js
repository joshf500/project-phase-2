import React from "react";
import ReviewCard from "./ReviewCard";



function ReviewsList({ reviews }) {
  return (
    <ul className="reviewsList">
      {reviews.map((review) => {
        // console.log(plant);
        return (
          <ReviewCard key={review?.id}
            depAirport={review?.depAirport}
            arrAirport={review?.arrAirport}
            date={review?.date}
            text={review?.text}
          />
        );
      })}
    </ul>
  );
}

export default ReviewsList;
