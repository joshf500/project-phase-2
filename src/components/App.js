import React, {useEffect,useState} from "react";
import { Link, Route, Routes } from 'react-router-dom'
import ViewByAirline from "./ViewByAirline";
import "./App.css";
import Home from "./Home";
import TopAirlines from "./TopAirlines";
import NewReviewForm from "./NewReviewForm"; 
import ReviewsList from "./ReviewsList";
import CreateByAirline from "./CreateByAirline";
const apiKey="67a39b6d0acb87e2c654ffb8e3194f5828d48b6fc98874795140feabfbfb9f196b5fd846066cb69fefc812cba8a23879"
const gpsCode = "OTHH"

function App() {

  return (
    <div className="app">
      <nav className="navbar">
        <Link className='link' to='/' exact="true">Home</Link> 
        <br/>
        <Link className='link' to='/view'>View</Link>
        <br/>
        <Link className='link' to='/create'>Create</Link>
        <br/>
        <Link className='link' to='/topairlines'>View Top Airlines</Link>
      </nav>
      <Routes>
        <Route path='/' exact="true" element={<Home />} />
        <Route path='view' element={<ViewByAirline/>} />
        <Route path='create' element={<CreateByAirline/>} />
        <Route path='newreviewform' element={<NewReviewForm/>} />
        <Route path='reviewslist' element={<ReviewsList/>} />
        <Route path='topairlines' element={<TopAirlines />} /> 
           
     </Routes>
  
    </div>
  );
}

export default App;
