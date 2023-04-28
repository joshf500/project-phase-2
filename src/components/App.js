import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import ViewByAirline from "./ViewByAirline";
import "./App.css";
import Home from "./Home";
import TopAirlines from "./TopAirlines/TopAirlines";
import NewReviewForm from "./NewReviewForm";
import ReviewsList from "./ReviewsList";
import CreateByAirline from "./CreateByAirline";

function App() {

  return (
    <div className="app">
      <nav className="navbar">
        <Link className='link' to='/' exact="true">Home</Link>
        <br/>
        <Link className='link' to='/view'>View</Link>
        <br/>
        <Link className='link' to='/top-airlines'>Top Airlines</Link>
      </nav>
      <Routes>
        <Route path='/' exact="true" element={<Home />} />
        <Route path='view' element={<ViewByAirline/>} />
        <Route path='create' element={<CreateByAirline/>} />
        <Route path='newreviewform' element={<NewReviewForm/>} />
        <Route path='reviewslist' element={<ReviewsList/>} />
        <Route path='/top-airlines' element={<TopAirlines />} />

     </Routes>

    </div>
  );
}

export default App;
