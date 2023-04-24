import React, {useEffect, useState} from "react";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"

function NewReviewForm() {
  const [airport, setAirport] = useState({})
  const [gpsCode, setGpsCode] = useState("")
  function handleReviewSubmit(e){
    e.preventDefault()
  }

  useEffect(() => {
    fetch(`https://airportdb.io/api/v1/airport/${gpsCode}?apiToken=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setAirport(data)
        console.log(data)
       })
  }, []);
 
  
  //const airportOption = (data) => {
  // let code = airport.iata_code
  // let name = airport.name
  // let municipality = airport.municipality
  // let country = airport.country.name
 // }
// const handleReviewSubmit = (e)=>{
//   const newReview = `${e.target.value}`
// }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleReviewSubmit}>
        <select onChange={(e)=> setGpsCode(e.target.value)}>
          <option>Select Departure</option>
          <option value = {`KJFK`} >JFK</option>
          <option value = {`OTHH`} >DOH</option>
        </select>
        {/* <input type="search" name="departure" list="mylist" placeholder="Departure Airport" /> */}
        <select onChange={(e)=> setGpsCode(e.target.value)}>
          <option>Select Departure</option>
          <option value = {`KJFK`} >JFK</option>
          <option value = {`OTHH`} >DOH</option>
        </select>
        <input type="date" id="date"  placeholder="Date" />
        <a/>
          <textarea id="review" rows="4" cols="50" placeholder="Share your experience!">
       
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
