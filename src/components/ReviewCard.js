import React from "react";
import NewReviewForm from "./NewReviewForm";

function ReviewCard({review}) {
  return (
    <li className="card">
      <h2>{`${review?.depAirport}-${review?.arrAirport}`}</h2>
      <h3>Date: {review?.date}</h3>
      <h4>Rating: {review?.rating}</h4>
      <p>Comments: {review.text}</p>

    </li>
  );
}

export default ReviewCard;
