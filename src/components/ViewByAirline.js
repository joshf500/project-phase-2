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
                    return (
                    <ul class="options">
                        <span key={airline.id} onClick={()=>{navigate('/reviewslist',{state:{selected: airline.name}});}} >
                            <img src={airline.logo}/>
                            <p>{airline.name}</p>
                        </span>
                    </ul>
                    )
                })}
                
            </main>
            
        </>
    )
}
