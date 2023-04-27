import { useEffect } from "react";
import React, {useState} from "react";
import ReviewCard from "./ReviewCard";
import { useLocation } from "react-router-dom";



function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const location = useLocation()

  useEffect(() => {
    if (location?.state?.airline){
      fetch(`http://localhost:6001/airlines/${location.state.airline.id}`)
        .then(res => res.json())
        .then(data => setReviews(data.reviews))
        .catch(err => {
            throw(err)
          })
      }
    }, []);

  return (
    <ul className="reviewsList">
      <h2>{location.state.airline.name} Flight Reviews</h2>
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
