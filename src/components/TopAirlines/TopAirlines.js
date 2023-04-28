import { useState, useEffect } from "react";
import TopAirlineCard from "./TopAirlineCard";

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
                    {airlines.map(airline => <TopAirlineCard airline={airline} />)}
                </ul>
            </main>

        </>
    )
}
