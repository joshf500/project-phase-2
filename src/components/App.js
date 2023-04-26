import React, {useEffect,useState} from "react";
import { Link, Route, Routes } from 'react-router-dom'
import ViewByAirline from "./ViewByAirline";
import "./App.css";
import Home from "./Home";
import './App.css';
import TopAirlines from "./TopAirlines";
import NewReviewForm from "./NewReviewForm"; 
import ReviewsList from "./ReviewsList";
import CreateReview from "./CreateReview";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"

// const url="https://api.api-ninjas.com/v1/airports"
// let options = {
//   method: 'GET',
//   headers: { 'x-api-key': "oXBEJfC9mYEY8R25nkiXZQ==T1FRszwualM66Hnt" }
// }

function App() {
  //const name = 'London Heathrow'
  // const [reviews, setReviews] = useState([]);
  
  
  // useEffect(() => {
  //   fetch(`http://localhost:6001/reviews`)
  //     .then(res => res.json())
  //     .then(data => setReviews(data))
  // }, []);
    
// const onReviewSubmit = (newReviews) =>{
//     setReviews([...reviews, newReviews])
//   }


  return (
    <div className="app">
      <nav className="navbar">
        <Link className='link' to='/' exact>Home</Link> 
        <br/>
        <Link className='link' to='/view'>View</Link>
        <br/>
        <Link className='link' to='/create'>Create</Link>
        <br/>
        <Link className='link' to='/topairlines'>View Top Airlines</Link>
      </nav>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='view' element={<ViewByAirline/>} />
        <Route path='create' element={<CreateReview/>} />
        <Route path='newreviewform' element={<NewReviewForm/>} />
        <Route path='reviewslist' element={<ReviewsList/>} />
        <Route path='topairlines' element={<TopAirlines />} /> 
           
     </Routes>
  
    </div>
  );
}

export default App;
