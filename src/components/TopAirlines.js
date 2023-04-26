import { useState, useEffect } from "react";

export default function TopAirlines(){
   

const [reviews, setReviews] = useState([]);

useEffect(() => {
    fetch(`http://localhost:6001/reviews`)
    .then(res => res.json())
    .then(data => {
        setReviews(data)
    })
}, []);
const filteredReviews = reviews.filter((review) => {
        return reviews.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    });
    return(
        <>
            <main>
                <h2>Top Airlines</h2>
                {filteredReviews.map((review) =>{
                    return(
                        <ol key={review.id}>
                            <li className="card">
                                <img width={250} src={review?.image} alt={review.title}></img>
                                <h3>{review?.title}</h3>
                                <p>Rating: {review?.rating}</p>
            
                            </li>
                        </ol>
                    )
                })}
            </main>
            
        </>
    )
}
