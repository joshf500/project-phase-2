import React, {useEffect, useState} from "react";

const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"

function NewReviewForm({onReviewSubmit}) {
  const [depAirport, setDepAirport] = useState({})
  const [arrAirport, setArrAirport] = useState({})
  const [gpsCode, setGpsCode] = useState("OTHH")
  const [date, setDate]=useState("")
  const [text, setText]=useState("")
  
 
  useEffect(() => {
    fetch(`https://airportdb.io/api/v1/airport/${gpsCode}?apiToken=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setDepAirport(data)
        setArrAirport(data)
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

function handleReviewSubmit(e){
  e.preventDefault();
  
  const review ={
    depAirport: depAirport,
    arrAirport: arrAirport,
    date: date,
    text: text
  }

fetch(`http://localhost:6001/reviews`,{
  method: "POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify(review)
})
  .then((res)=>res.json())
  .then ((data)=>{
    onReviewSubmit(data)
  })
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleReviewSubmit}>
        <select id="departure" onChange={e=> {setGpsCode(e.target.value); setDepAirport(e.target.innerText)}}>
          <option>Select Departure</option>
          <option value = {`KJFK`} >JFK</option>
          <option value = {`OTHH`} >DOH</option>
        </select>
        {/* <input type="search" name="departure" list="mylist" placeholder="Departure Airport" /> */}
        <select id="arrival" onChange={e=> {setGpsCode(e.target.value); setArrAirport(e.target.innerText)}}>
          <option>Select Arrival</option>
          <option value = {`KJFK`} >JFK</option>
          <option value = {`OTHH`} >DOH</option>
        </select>
        <input type="date" id="date"  placeholder="Date" onChange={e=>setDate(e.target.value)} />
        
          <textarea id="review" rows="4" cols="50" placeholder="Share your experience!" onChange={e=>setText(e.target.value)}>
       
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
