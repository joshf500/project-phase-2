import React from "react";
import NewReviewForm from "./NewReviewForm";

function ReviewCard({review}) {
  return (
    <ul className="card">
      <h2>Route: {`${review?.depAirport}-${review?.arrAirport}`}</h2>
      <h3>Date: {review?.date}</h3>
      <h4>Rating: {review?.rating}</h4>
      <p>Comments: {review.text}</p>

    </ul>
  );
}

export default ReviewCard;
