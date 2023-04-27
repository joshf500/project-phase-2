import React from "react"; 
import {useEffect,useState} from "react";

import Search from "./Search";
import CreateAirlineList from "./CreateAirlineList";

export default function CreateByAirline(){
    const [airlines, setAirlines] = useState([])
    const [searchInput, setSearchInput] = useState("");
    
    useEffect(() => {
        fetch(`http://localhost:4001/airlines`)
          .then(res => res.json())
          .then(data => {
            setAirlines(data)
           })
      }, []);
      
      function onSearch(input) {
        console.log(input);
        setSearchInput(input);
        
        // setAirlines(airlines);
      }

      const filteredAirlines = airlines.filter((airline) => {
        return airline.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      //console.log(filteredAirlines)
      
      //const filteredlist = setAirlines(filteredAirlines)
    
    return(
        <>
            <main>
                <h2>Airlines</h2>
                <Search searchInput={searchInput} onSearch={onSearch} />
                <CreateAirlineList airlines={filteredAirlines}/>
                
            </main>
            
        </>
    )
}
