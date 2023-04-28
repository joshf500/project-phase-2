import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
library.add(fasFaStar, farFaStar)

function TopAirlineCard({ airline }){
    const navigate = useNavigate()

    const renderAverageRating = () => {
        const stars = []
        const rating = Math.floor(airline.averageRating)
        for(let i = 0; i < rating; i++){
            stars.push(<FontAwesomeIcon className="rating_star" icon={fasFaStar}/>)
        }
        return stars
    }

    return (
            <li
                key={airline.id}
                className="top-airline-card"
                >
                <div className="top-airline-info">
                    <img
                        src={airline.logo}
                        alt=""
                    />
                    <div>
                        <h3>{airline.name}</h3>
                        <h6>Average Rating: <span>{renderAverageRating()}</span></h6>
                    </div>
                </div>
                <button
                    onClick={()=>{navigate('/reviewslist',{state:{ airline }})}}
                    >See Reviews</button>
            </li>
    )
}

export default TopAirlineCard
