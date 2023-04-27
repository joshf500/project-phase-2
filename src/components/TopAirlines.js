import { useState, useEffect } from "react";

export default function TopAirlines(){
    const [airlines, setAirlines] = useState([])
    const [sortedAirlines, setSortedAirlines] = useState([])

    useEffect(() => {
        fetch(`http://localhost:6001/airlines`)
        .then(res => res.json())
        .then(data => {
            const airlines = data.map(airline => {
                if(airline.reviews.length > 0){
                    calculateRanking(airline)
                }

                return airline
            }).sort((a, b) => a.averageRating - b.averageRating)
        })

        const sortedAirlines = airlines.sort((a, b) => b.averageRating - a.averageRating)

        setSortedAirlines(sortedAirlines)
    }, []);

    const calculateRanking = (airline) => {
        const sumOfRatings = airline.reviews.map(review => review.rating).reduce((acc, current) => acc + current, 0)
        const averageRating = sumOfRatings / airline.reviews.length

        fetch(`http://localhost:6001/airlines/${airline.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ averageRating })
        }).then(res => res.json())
        .then(airlineObj => {
            return airlineObj
        })
        .catch(err => {
            throw(err)
        })
    }

    return(
        <>
            <main>
                <h2>Top Airlines</h2>

            </main>

        </>
    )
}
