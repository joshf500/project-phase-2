import React from 'react'
import {useNavigate} from 'react-router-dom'

function TopAirlineCard({ airline }){
    const navigate = useNavigate()
    return (
        <li
            key={airline.id}
            className="top-airline-card"
            >
            <img
                src={airline.logo}
                alt=""
                onClick={()=>{navigate('/reviewslist',{state:{ airline }})}}
            />
            <div>
                <h3>{airline.name}</h3>
                <h6>Average Rating: <span>{airline.averageRating}</span></h6>
            </div>
        </li>
    )
}

export default TopAirlineCard
