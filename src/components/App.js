import React, {useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"
// const url="https://api.api-ninjas.com/v1/airports"
// let options = {
//   method: 'GET',
//   headers: { 'x-api-key': "oXBEJfC9mYEY8R25nkiXZQ==T1FRszwualM66Hnt" }
// }



function App() {
  //const name = 'London Heathrow'

  useEffect(() => {
    fetch(`https://airportdb.io/api/v1/airport/${gpsCode}?apiToken=${apiKey}`, {
      headers: {"Content-Type": 'application/json'},
  })
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);
    



  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
