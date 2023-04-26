import React, {useEffect, useState} from "react";
import CreateReview from "./CreateReview"
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
    // title: {selected}
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
      <form onSubmit={handleReviewSubmit} >
        <datalist id="mylist">
          <option value = {`JFK`} id="JFK" name="KJFK" >New York, USA</option>
          <option value = {`DOH`} id="DOH" name="OTHH">Doha, Qatar</option>
        </datalist>
        <h3>Select Departure</h3>
        <input type ="search" list ="mylist" id="departure" 
        onChange={e=> {setGpsCode(e.target.name); setDepAirport(e.target.value)}}>
        </input>
        <h3>Select Arrival</h3>
        <input type ="search" list ="mylist" id="arrival"
        onChange={e=> {setGpsCode(e.target.name); setArrAirport(e.target.value)}}>
        </input>
    
        <input type="date" id="date"  placeholder="Date" onChange={e=>setDate(e.target.value)} />

        <select>
          Rate your experience out of 5
            <option value="1" >1</option><option value="2" >2</option>
            <option value="3" >3</option><option value="4" >4</option>
            <option value="5" >5</option>
        </select>
        
          <textarea id="review" rows="4" cols="50" placeholder="Share your experience!" onChange={e=>setText(e.target.value)}>
       
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
