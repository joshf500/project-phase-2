import React, {useEffect} from "react";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"

function NewReviewForm({onReviewSubmit}) {
  
  function handleReviewSubmit(e){
    e.preventDefault()
  }

  useEffect(() => {
    fetch(`https://airportdb.io/api/v1/airport/${gpsCode}?apiToken=${apiKey}`, {
      headers: {"Content-Type": 'application/json'},
  })
      .then(res => res.json())
      .then(data => onReviewSubmit(data))
      
  }, []);
  console.log(data)
  
  // const airportOption = (data) => {
  // const code = data.iata_code
  // const name = data.name
  // const municipality = data.municipality
  // const country = data.country.name
  // }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleReviewSubmit}>
      <datalist id="mylist">
        <option value = {`${data.iata_code} - ${data.name} - ${data.municipality}, ${data.name.country}`} />
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
