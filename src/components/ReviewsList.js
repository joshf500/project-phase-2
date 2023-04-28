import { useEffect } from "react";
import React, {useState} from "react";
import ReviewCard from "./ReviewCard";
import { useLocation } from "react-router-dom";
import NewReviewForm from "./NewReviewForm";

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
    <main>
      <h2>{location.state.airline.name}</h2>
      <NewReviewForm
        renderReview={(review) => setReviews([...reviews, review])}
        airline={location?.state?.airline}
        />
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
    </main>
  );
}

export default ReviewsList;
