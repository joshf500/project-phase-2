import React from "react"; 
import {useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import ReviewsList from "./ReviewsList";

export default function ViewByAirline({airlines}){
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([]);
   
    useEffect(() => {
        fetch(`http://localhost:6001/reviews`)
          .then(res => res.json())
          .then(data => setReviews(data))
      }, []);

    return(
        <>
            <main>
                <h2>Airlines</h2>
                <img 
                class = "American Airlines"
                onClick={() => {navigate('/reviewslist')}}
                src="https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/THUMB-aa_aa__vrt_rgb_grd_pos.png"
                >
                </img>
                
            </main>
            <Routes>
                <Route path='reviewslist' element={<ReviewsList reviews={reviews}/>} />
            </Routes>
        </>
    )
}
