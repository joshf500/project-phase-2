import React, {useEffect, useState} from "react";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"

function NewReviewForm() {
  const [airport, setAirport] = useState({})
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

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleReviewSubmit}>
      <datalist id="mylist">
        <option value = {`${airport?.iata_code} - ${airport?.name} - ${airport?.municipality}, ${airport?.country?.name}`} />
      </datalist>
        <input type="search" name="departure" list="mylist" placeholder="Departure Airport" />
        <input type="search" name="arrival" placeholder="Arrival Airport" />
        <input type="date" name="date"  placeholder="Date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
