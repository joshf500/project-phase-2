import React, {useEffect, useState, useContext} from "react";
import { useLocation } from "react-router-dom";
import StarRating from "./TopAirlines/StarRating";

function NewReviewForm({ airline, renderReview }) {
  const location = useLocation()
  const [depAirport, setDepAirport] = useState({})
  const [arrAirport, setArrAirport] = useState({})
  const [date, setDate]=useState("")
  const [text, setText]=useState("")
  const [rating, setRating]=useState(0)
  const [airports, setAirports]=useState([])

  useEffect(() => {
    fetch(`http://localhost:8001/airports`)
      .then(res => res.json())
      .then(data => {
        setAirports(data)

       })
  }, []);

function handleReviewSubmit(e){
    e.preventDefault()
      const review = {
        id: airline.reviews.length + 1,
        depAirport: depAirport,
        arrAirport: arrAirport,
        date: date,
        rating: parseInt(rating),
        title: location.state.selected,
        text: text
      }

    renderReview(review)

    fetch(`http://localhost:6001/airlines/${airline.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...airline,
        reviews: [...airline.reviews, review]
      })
    })
      .then((res)=>res.json())

    e.target.reset()

    window.scrollTo(0, document.body.scrollHeight);

  }

  return (

    <div className="new-review-form">
      <h2>Review Your {`${airline.name}`} Flight</h2>
      <StarRating/>
      <form onSubmit={handleReviewSubmit} >
        <datalist id="airportlist">
            {airports.map((airport) => {
              return (
              <option key={airport.iata_code} value = {`${airport.iata_code} (${airport.city})`} >
               {airport.name} — {airport.city}, {airport.country}
              </option>
            )
          })}
        </datalist>
        <h3>Select Departure</h3>
        <input type ="search" list ="airportlist" id="departure"
        onChange={e=> {setDepAirport(e.target.value)}}>
        </input>
        <h3>Select Arrival</h3>
        <input type ="search" list ="airportlist" id="arrival"
        onChange={e=> {setArrAirport(e.target.value)}}>
        </input>

        <input type="date" id="date"  placeholder="Date" onChange={e=>setDate(e.target.value)} />

        <select onChange={e=>setRating(e.target.value)}>
          Rate your experience out of 5
            <option key="1" value="1" >1</option><option key="2" value="2" >2</option>
            <option key="3" value="3" >3</option><option key="4" value="4" >4</option>
            <option key="5" value="5" >5</option>
        </select>
          <textarea id="review" rows="4" cols="50" placeholder="Share your experience!" onChange={e=>setText(e.target.value)}>
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default NewReviewForm;
