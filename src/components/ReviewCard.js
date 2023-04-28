import React from "react";
import NewReviewForm from "./NewReviewForm";

function ReviewCard({review}) {
  return (
    <div className="card" key={review.id}>
      <h3>Route: {`${review?.depAirport}-${review?.arrAirport}`}</h3>
      <h4>Date: {review?.date}</h4>
      <h4>Rating: {review?.rating}</h4>
      <h3>{review.title}</h3>
      <p>{review.text}</p>

    </div>
  );
}

export default ReviewCard;
