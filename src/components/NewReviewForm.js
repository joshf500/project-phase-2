import React, {useEffect} from "react";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"

function NewReviewForm() {

  useEffect(() => {
    fetch(`https://airportdb.io/api/v1/airport/${gpsCode}?apiToken=${apiKey}`, {
      headers: {"Content-Type": 'application/json'},
  })
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Departure Airport" />
        <input type="text" name="image" placeholder="Arrival Airport" />
        <input type="date" name="date"  placeholder="Date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewReviewForm;
