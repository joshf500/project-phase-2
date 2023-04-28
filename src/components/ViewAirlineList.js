import React from "react";
import {useNavigate} from 'react-router-dom'

function ViewAirlineList({airlines}){
const navigate = useNavigate()


return (
    <ul>
        {airlines.map((airline) => {
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
