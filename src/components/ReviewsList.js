import { useEffect } from "react";
import React, {useState} from "react";
import ReviewCard from "./ReviewCard";
import { useLocation } from "react-router-dom";



function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const location = useLocation()
   
  useEffect(() => {
    if (location?.state?.selected){
      fetch(`http://localhost:6001/reviews?title=${location.state.selected}`)
        .then(res => res.json())
        .then(data => setReviews(data))
      } else{
        fetch(`http://localhost:6001/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
      }
    }, []);

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
