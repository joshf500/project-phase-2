import React, {useEffect,useState} from "react";
import Header from "./Header";
import SeeOrCreate from "./SeeOrCreate";
import NewReviewForm from "./NewReviewForm";
import ReviewCard from "./ReviewCard";  
import ReviewsList from "./ReviewsList";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"
// const url="https://api.api-ninjas.com/v1/airports"
// let options = {
//   method: 'GET',
//   headers: { 'x-api-key': "oXBEJfC9mYEY8R25nkiXZQ==T1FRszwualM66Hnt" }
// }



function App() {
  //const name = 'London Heathrow'
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:6001/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);
    



  return (
    <div className="app">
      <NewReviewForm/>
      <Header />
      <ReviewsList reviews={reviews}/>
      {/* <SeeOrCreate /> */}
    </div>
  );
}

export default App;
