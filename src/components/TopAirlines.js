import { useState, useEffect } from "react";

export default function TopAirlines(){
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        fetch(`http://localhost:6001/airlines`)
        .then(res => res.json())
        .then(data => {
            const airlines = data.sort((a, b) => b.averageRating - a.averageRating)
            setAirlines(airlines)
        })
    }, []);

    return(
        <>
            <main>
                <h2>Top Airlines</h2>
                <ul>
                    {airlines.map(airline => {
                        return (<li key={airline.id}>
                            <h5>{airline.name}</h5>
                            <h6>Average Rating:{airline.averageRating}</h6>
                        </li>)
                    })}
                </ul>

            </main>

        </>
    )
}
