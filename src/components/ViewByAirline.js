import React from "react";
import {useEffect,useState} from "react";
import Search from "./Search";
import ViewAirlineList from "./ViewAirlineList";


export default function ViewByAirline(){
    const [airlines, setAirlines] = useState([])
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch(`http://localhost:6001/airlines`)
          .then(res => res.json())
          .then(data => {
            setAirlines(data)
           })
      }, []);

      function onSearch(input) {
        setSearchInput(input);
      }

      const filteredAirlines = airlines.filter((airline) => {
        return airline.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    
    return(
        <>
            <main>
                <h2>Airlines</h2>
                <Search searchInput={searchInput} onSearch={onSearch} />
                <ViewAirlineList airlines={filteredAirlines}/>

            </main>

        </>
    )
}
