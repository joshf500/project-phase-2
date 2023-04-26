import React from "react"; 
import {useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import ReviewsList from "./ReviewsList";

export default function ViewByAirline(){
    const navigate = useNavigate()
    const [airlines, setAirlines] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:4001/airlines`)
          .then(res => res.json())
          .then(data => {
            setAirlines(data)
           })
      }, []);
  
    return(
        <>
            <main>
                <h2>Airlines</h2>
                {airlines.map((airline) => {
                    console.log(airline.title)
                return (
                <img key={airline.id} src={airline.logo} 
                onClick={()=>{navigate('/reviewslist',{state:{selected: airline.title}},{state:{thumbnail: airline.src}});}} 
                />)})}
                
            </main>
            
        </>
    )
}
