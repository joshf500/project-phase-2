import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function ViewAirlineList({airlines}){
// const [airlines, setAirlines] = useState([])
const navigate = useNavigate()
console.log(airlines[0])
// useEffect(() => {
//     fetch(`http://localhost:4001/airlines`)
//       .then(res => res.json())
//       .then(data => {
//         setAirlines(data)
//        })
//   }, []);


return (
    <ul>
        {airlines.map((airline) => {
            console.log(airline.logo);
        return(
        <span class="options" key={airline.id} onClick={()=>{navigate('/reviewslist',{state:{ airline }});}} >
            <img src={airline.logo}/>
            <p>{airline.name}</p>
        </span>
        )
        })}
    </ul>
)
}
export default ViewAirlineList
