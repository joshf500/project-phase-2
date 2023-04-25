import React from "react"; 
import {useNavigate} from 'react-router-dom'

export default function ViewByAirline({airlines}){
    const navigate = useNavigate()
   
    return(
        <>
            <main>
                <h2>Airlines</h2>
                <img 
                onClick={() => {navigate('/newreviewform')}}
                src="https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/THUMB-aa_aa__vrt_rgb_grd_pos.png"
                >
                </img>
                
            </main>
        </>
    )
}

